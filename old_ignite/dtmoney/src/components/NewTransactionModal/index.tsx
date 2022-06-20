import { useState, FormEvent } from 'react';
import Modal from 'react-modal';

import { useTransaction } from '../../hooks/useTransactions';
import { api } from '../../services/api';

import closeSvg from '../../assets/close.svg';
import incomeSvg from '../../assets/income.svg';
import outcomeSvg from '../../assets/outcome.svg';

import { Container, TransactionTypeContainer, RadioBox } from './styles';

interface INewTransactionModal {
  isOpen: boolean;
  onRequesClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequesClose,
}: INewTransactionModal) {
  const { createTransaction } = useTransaction();

  const [type, setType] = useState<'deposit' | 'withdraw'>('deposit');
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');

  const handleSetTypeDeposit = () => {
    setType('deposit');
  };

  const handleSetTypeWithdraw = () => {
    setType('withdraw');
  };

  const handleCreateNewTransaction = async (event: FormEvent) => {
    event.preventDefault();
    try {
      await createTransaction({
        amount,
        category,
        type,
        title,
      });

      setAmount(0);
      setCategory('');
      setTitle('');
      setType('deposit');

      onRequesClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequesClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequesClose}
        className="react-modal-close"
      >
        <img src={closeSvg} alt="Fechar modal" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Novas transacoes</h2>

        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={e => setAmount(Number(e.target.value))}
        />
        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={handleSetTypeDeposit}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeSvg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={handleSetTypeWithdraw}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeSvg} alt="Saida" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={e => setCategory(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
