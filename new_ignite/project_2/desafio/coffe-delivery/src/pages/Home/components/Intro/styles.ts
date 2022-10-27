import styled from 'styled-components';
import imagePath from '../../../../assets/background-intro.png';

export const ContainerHeader = styled.header`
  height: 544px;
  width: 100%;
  background-image: url(${imagePath});
  background-repeat: round;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const IntroContent = styled.div`
  max-width: 588px;
  width: 100%;
  h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;
    color: ${({ theme }) => theme['base-title']};
  }

  h3 {
    margin-top: 1rem;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;
    color: ${({ theme }) => theme['base-subtitle']};
    font-stretch: 100;
  }
`;

export const GridItems = styled.div`
  margin-top: 80px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 1rem;
`;
