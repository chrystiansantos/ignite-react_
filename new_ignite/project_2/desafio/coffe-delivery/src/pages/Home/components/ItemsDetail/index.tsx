import React, { ReactElement } from 'react';
import { ContainerItemDetail } from './styles';

interface IItemsDetailProps {
  title: string;
  icon: ReactElement;
  backgroundIcon: string;
}

export function ItemsDetail({
  title,
  icon,
  backgroundIcon,
}: IItemsDetailProps) {
  return (
    <ContainerItemDetail background={backgroundIcon}>
      {icon}
      <span>{title}</span>
    </ContainerItemDetail>
  );
}
