import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

import { api } from '../services/api';

interface ITransaction {
  id: number;
  title: string;
  amount: number;
  type: 'deposit' | 'withdraw';
  category: string;
  createdAt: string;
}

type ITransactionInput = Omit<ITransaction, 'id' | 'createdAt'>;

interface ITransactionContextData {
  transactions: ITransaction[];
  createTransaction: (data: ITransactionInput) => Promise<void>;
}

interface ITransactionProviderProps {
  children: ReactNode;
}

const TransactionsContext = createContext<ITransactionContextData>(
  {} as ITransactionContextData,
);

function TransactionProvider({ children }: ITransactionProviderProps) {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  const createTransaction = async (transaction: ITransactionInput) => {
    const { data } = await api.post('/transactions', {
      ...transaction,
      createdAt: new Date(),
    });
    setTransactions([...transactions, data.transactions]);
  };

  useEffect(() => {
    api
      .get('/transactions')
      .then(({ data }) => setTransactions(data.transactions));
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}

function useTransaction() {
  return useContext(TransactionsContext);
}

export { TransactionProvider, useTransaction };
