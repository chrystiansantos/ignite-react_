import { MapPin } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { ContainerButton } from './styles';

export function ButtonCities() {
  const colors = useTheme();
  return (
    <ContainerButton>
      <MapPin size={22} color={colors['purple-dark']} />
      <span>Igutama, MG</span>
    </ContainerButton>
  );
}
