import incomeSvg from '../../assets/income.svg';
import outcomeSvg from '../../assets/outcome.svg';
import totalSvg from '../../assets/total.svg';
import { useTransaction } from '../../hooks/useTransactions';

import { Container } from './styles';

export function Sumary() {
  const { transactions } = useTransaction();

  const sumary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'deposit') {
        acc.deposit += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdrws += transaction.amount;
        acc.total -= transaction.amount;
      }
      return acc;
    },
    {
      deposit: 0,
      withdrws: 0,
      total: 0,
    },
  );

  console.log(sumary);
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeSvg} alt="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(sumary.deposit)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeSvg} alt="Saídas" />
        </header>
        <strong>
          -
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(sumary.withdrws)}
        </strong>
      </div>
      <div>
        <header>
          <p>Total</p>
          <img src={totalSvg} alt="Total" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(sumary.total)}
        </strong>
      </div>
    </Container>
  );
}
