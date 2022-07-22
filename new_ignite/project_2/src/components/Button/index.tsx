import { ButtonContainer } from './styles';

interface IButtonProps {
  // eslint-disable-next-line react/require-default-props
  variant?: 'primary' | 'secondary' | 'danger' | 'success';
}

export function Button({ variant = 'primary' }: IButtonProps) {
  return (
    <ButtonContainer variant={variant} type="button">
      Enviar
    </ButtonContainer>
  );
}
