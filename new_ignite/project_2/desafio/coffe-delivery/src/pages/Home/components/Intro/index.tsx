import { Clock, Coffee, Package, ShoppingCart } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { ContainerHeader, GridItems, IntroContent } from './styles';
import { ReactComponent as LogoSVG } from '../../../../assets/IntroLogo.svg';
import { ItemsDetail } from '../ItemsDetail';

export function Intro() {
  const color = useTheme();
  return (
    <ContainerHeader>
      <IntroContent>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <h3>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </h3>
        <GridItems>
          <ItemsDetail
            backgroundIcon={color['yellow-dark']}
            icon={<ShoppingCart size={16} color={color.white} />}
            title="Compra simples e segura"
          />
          <ItemsDetail
            backgroundIcon={color['base-text']}
            icon={<Package size={16} color={color.white} />}
            title="Embalagem mantém o café intacto"
          />
          <ItemsDetail
            backgroundIcon={color.yellow}
            icon={<Clock size={16} color={color.white} />}
            title="Entrega rápida e rastreada"
          />
          <ItemsDetail
            backgroundIcon={color.purple}
            icon={<Coffee size={16} color={color.white} />}
            title="O café chega fresquinho até você"
          />
        </GridItems>
      </IntroContent>
      <LogoSVG />
    </ContainerHeader>
  );
}
