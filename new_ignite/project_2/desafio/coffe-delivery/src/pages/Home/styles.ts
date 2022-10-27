import styled from 'styled-components';

export const CoffeList = styled.div`
  max-width: 1140px;
  margin: auto;

  h1 {
    margin-top: 2rem;
    margin-bottom: 3.375rem;
  }

  > div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }
`;
