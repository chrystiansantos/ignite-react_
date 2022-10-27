import styled from 'styled-components';

export const ContainerButton = styled.button`
  width: 143px;
  height: 38px;
  background-color: ${({ theme }) => theme['purple-light']};
  color: ${({ theme }) => theme['purple-dark']};

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;

  span {
    padding-left: 0.25rem;
  }
`;
