import { Minus, Plus } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { ContainerChangeInput } from './styles';

export function ChangedAmountProduct() {
  const colors = useTheme();
  return (
    <ContainerChangeInput>
      <button type="button">
        <Minus color={colors.purple} size={16} />
      </button>
      <input />
      <button type="button">
        <Plus color={colors.purple} size={16} />
      </button>
    </ContainerChangeInput>
  );
}
