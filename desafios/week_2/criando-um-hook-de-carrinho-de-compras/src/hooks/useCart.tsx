import { createContext, ReactNode, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';
import { Product, Stock } from '../types';

interface CartProviderProps {
  children: ReactNode;
}

interface UpdateProductAmount {
  productId: number;
  amount: number;
}

interface CartContextData {
  cart: Product[];
  addProduct: (productId: number) => Promise<void>;
  removeProduct: (productId: number) => void;
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [cart, setCart] = useState<Product[]>(() => {

    const storagedCart = localStorage.getItem('@RocketShoes:cart');
    if (storagedCart) {
      return JSON.parse(storagedCart);
    }
    return [];
  });

  const addProduct = async (productId: number) => {
    try {
      // Dispara requisicao pra conferir o estoque
      const promiseProducts = [api.get(`/stock/${productId}`)]
      // Verificar se o produto esta adicionado no carrinho
      const productInCart = cart.find(product => product.id === productId)
      // Caso nao esteja no carrinho dispara uma requisicao pra buscar os dados do produto
      if (!productInCart) promiseProducts.push(api.get(`/products/${productId}`))

      const [{ data }, product] = await Promise.all(promiseProducts);

      // Caso nao tenha o produto adicionado no carrinho
      if (!productInCart) {
        if (data.amount > 0) {
          const newCart = [...cart, {
            ...product.data,
            amount: 1,
          }]
          setCart(newCart)
          localStorage.setItem('@RocketShoes:cart', JSON.stringify(newCart));
        } else {
          toast.error('Quantidade solicitada fora de estoque');
        }
      } else {
        if (data.amount > productInCart.amount) {

          const newCart = cart.map(el => {
            if (el.id === productId) {
              el.amount += 1;
            }
            return el;
          })
          setCart(newCart)
          localStorage.setItem('@RocketShoes:cart', JSON.stringify(newCart));
        } else {
          toast.error('Quantidade solicitada fora de estoque');
        }
      }
    } catch {
      toast.error('Erro na adição do produto');
    }
  };

  const removeProduct = (productId: number) => {
    try {
      const findProduct = cart.find(product => product.id === productId);
      if (!findProduct) return toast.error('Erro na remoção do produto');

      const newCart = cart.filter(product => product.id !== productId);
      localStorage.setItem('@RocketShoes:cart', JSON.stringify(newCart));
      setCart(newCart)
    } catch {
      toast.error('Erro na remoção do produto');
    }
  };

  const updateProductAmount = async ({
    productId,
    amount,
  }: UpdateProductAmount) => {
    try {
      if (amount <= 1) return;
      const { data } = await api.get(`/stock/${productId}`)
      if (amount > data.amount) return toast.error('Quantidade solicitada fora de estoque');
      const newCart = cart.map(product => {
        if (product.id === productId) {
          product.amount = amount;
        }
        return product;
      })
      localStorage.setItem('@RocketShoes:cart', JSON.stringify(newCart));
      setCart(newCart)
    } catch {
      toast.error('Erro na alteração de quantidade do produto');
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, updateProductAmount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}
