import styled, { css } from 'styled-components';

interface IContainerButton {
  backgroundColor: string;
  backgroundHover: string | undefined;
}

export const ContainerButton = styled.button<IContainerButton>`
  height: 38px;
  width: 38px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 6px;

  transition: background-color 0.2s ease-in;

  ${({ backgroundHover }) =>
    backgroundHover &&
    css`
      &:hover {
        background-color: ${backgroundHover};
      }
    `};

  span {
    position: absolute;
    top: -5px;
    right: -10px;
    width: 20px;
    height: 20px;
    background-color: ${({ theme }) => theme['yellow-dark']};
    color: ${({ theme }) => theme.white};
    border-radius: 10px;
    font-weight: 700;
  }
`;
