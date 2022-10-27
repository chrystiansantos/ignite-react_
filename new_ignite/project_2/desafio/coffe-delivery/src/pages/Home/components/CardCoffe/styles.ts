import styled from 'styled-components';

export const ContainerCard = styled.div`
  width: 256px;
  height: 330px;

  background: ${({ theme }) => theme['base-card']};
  border-radius: 6px 36px;
`;

export const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 120px;
    height: 120px;
    margin-top: -20px;
  }
`;

export const TypeCoffe = styled.div`
  margin: 0.75rem auto 1rem;
  display: flex;
  flex-direction: row;
  gap: 0.25rem;

  span {
    text-align: center;
    padding: 0.25rem 0.5rem;
    height: 21px;
    border-radius: 100px;
    font-weight: 700;
    font-size: 0.625rem;
    line-height: 130%;
    text-transform: uppercase;
    background: ${({ theme }) => theme['yellow-light']};
    color: ${({ theme }) => theme['yellow-dark']};
  }
`;

export const Description = styled.div`
  text-align: center;
  margin: 1rem auto 2rem;
  strong {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;
    text-align: center;
    color: ${({ theme }) => theme['base-subtitle']};
    display: inline-block;
    margin-bottom: 0.5rem;
  }

  span {
    font-size: 0.875rem;
    line-height: 130%;
    color: ${({ theme }) => theme['base-label']};
  }
`;

export const Buy = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 1rem;
  width: 100%;
  gap: 1rem;

  strong {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    &:before {
      content: 'R$';
      margin-right: 0.25rem;
      font-weight: 400;
      font-size: 0.725rem;
      line-height: 130%;
      color: ${({ theme }) => theme['base-text']};
    }
  }
`;
