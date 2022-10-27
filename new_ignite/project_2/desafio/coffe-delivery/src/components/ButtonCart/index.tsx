/* eslint-disable react/require-default-props */
import { ShoppingCart } from 'phosphor-react';
import { ContainerButton } from './styles';

interface IButtonCartProps {
  color: string;
  backgroundColor: string;
  backgroundHover?: string;
  amountProducts?: number;
}

export function ButtonCart({
  color,
  backgroundColor,
  backgroundHover,
  amountProducts,
}: IButtonCartProps) {
  return (
    <ContainerButton
      backgroundColor={backgroundColor}
      backgroundHover={backgroundHover}
    >
      <ShoppingCart size={22} color={color} />
      {amountProducts && <span>{amountProducts}</span>}
    </ContainerButton>
  );
}
