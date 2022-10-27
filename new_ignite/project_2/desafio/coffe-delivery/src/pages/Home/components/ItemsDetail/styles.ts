import styled from 'styled-components';

interface IContainerItemDetailProps {
  background: string;
}

export const ContainerItemDetail = styled.div<IContainerItemDetailProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  svg {
    padding: 8px;
    width: 32px;
    height: 32px;
    font-weight: bold;
    background: ${({ background }) => background};
    border-radius: 16px;
  }

  span {
    font-size: 16px;
    line-height: 130%;
    color: ${({ theme }) => theme['base-text']};
  }
`;
