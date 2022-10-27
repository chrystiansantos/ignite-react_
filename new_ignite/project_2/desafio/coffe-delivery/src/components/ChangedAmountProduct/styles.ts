import styled from 'styled-components';

export const ContainerChangeInput = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background: ${({ theme }) => theme['base-button']};
  padding: 0 0.5rem;
  height: 38px;

  input {
    width: 100%;
    height: 38px;
    font-size: 24px;
    padding: 8px;
    border-radius: 6px;
    text-align: center;
    background: ${({ theme }) => theme['base-button']};
    border: none;

    font-weight: 400;

    line-height: 130%;

    color: ${({ theme }) => theme['base-title']};
  }

  button {
    background-color: transparent;
    border: none;
  }
`;
