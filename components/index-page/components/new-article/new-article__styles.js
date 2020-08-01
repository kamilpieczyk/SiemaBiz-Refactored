import styled from 'styled-components';

import colors from '../../../../styles/colors';
import { mobile } from '../../../../styles/devices';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 80%;
  height: 500px;
  position: relative;
  border-radius: 10px;
  overflow: hidden;

  ::before {
    content: '';
    background: ${({ background }) => `url(${background})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition-duration: 0.5s;
    ${({ isIntroduction }) => isIntroduction && 'filter: blur(8px)grayscale(80%);'}
  }

  @media (max-width: ${mobile}px) {
    width: 90%;
  }
`;

export const TitleContainer = styled.div`
  position: absolute;
  bottom: 5px;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 50px;
  padding: 0 5% 10px 5%;
  h2 {
    color: ${colors.white};
    text-shadow: 0px 0px 5px ${colors.darkGrey};
    font-size: 1.5rem;
    margin: 0;
    margin-bottom: 5px;
    cursor: pointer;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    p,
    svg {
      margin: 0;
      margin-right: 5px;
      color: ${colors.white};
    }
  }

  @media (max-width: ${mobile}px) {
    bottom: 40px;
  }
`;

export const Introduction = styled.div`
  background: ${colors.transparentWhite};
  backdrop-filter: blur(5px);
  width: 400px;
  height: 0;
  opacity: 0;
  padding: 25px;
  border-radius: 5px;
  position: absolute;
  top: 40px;
  left: 5%;
  overflow: hidden;
  text-align: justify;

  @media (max-width: ${mobile}px) {
    top: 10px;
    width: 90%;
  }
`;
