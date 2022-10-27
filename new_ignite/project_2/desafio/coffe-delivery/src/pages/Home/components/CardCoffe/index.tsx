import { useTheme } from 'styled-components';
import { ButtonCart } from '../../../../components/ButtonCart';
import { ChangedAmountProduct } from '../../../../components/ChangedAmountProduct';
import {
  ContainerCard,
  ContentCard,
  Description,
  Buy,
  TypeCoffe,
} from './styles';
import Coffe from '../../../../assets/products/Coffee.png';

export function CardCoffe() {
  const colors = useTheme();
  return (
    <ContainerCard>
      <ContentCard>
        <img src={Coffe} alt="coffe" />
        <TypeCoffe>
          <span>Tradicional</span>
          <span>Gelado</span>
          <span>Alcolico</span>
        </TypeCoffe>
        <Description>
          <strong>Expresso tradicional</strong>
          <p>O tradicional café feito com água quente e grãos moídos</p>
        </Description>
        <Buy>
          <strong>9,90</strong>
          <ChangedAmountProduct />
          <ButtonCart
            color={colors.white}
            backgroundColor={colors['purple-dark']}
            backgroundHover={colors.purple}
          />
        </Buy>
      </ContentCard>
    </ContainerCard>
  );
}
