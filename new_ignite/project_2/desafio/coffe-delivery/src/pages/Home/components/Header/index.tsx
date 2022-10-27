import { useTheme } from 'styled-components';
import { ButtonCart } from '../../../../components/ButtonCart';
import { ButtonCities } from '../../../../components/ButtonCities';

import { ReactComponent as LogoSVG } from '../../../../assets/logo.svg';

import { Container, Location } from './styles';

export function Header() {
  const colors = useTheme();
  return (
    <Container>
      <Location>
        <ButtonCities />
        <ButtonCart
          color={colors['yellow-dark']}
          backgroundColor={colors['yellow-light']}
          amountProducts={3}
        />
      </Location>
      <LogoSVG />
    </Container>
  );
}
