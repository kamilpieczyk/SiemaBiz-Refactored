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
  background: ${({ background }) => `url(${background})`};
  border-radius: 10px;
  position: relative;
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
`;

export const Introduction = styled.div`
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  background: ${colors.transparentWhite};
  backdrop-filter: blur(5px);
  width: 400px;
  padding: 25px;
  border-radius: 5px;
  position: absolute;
  top: 40px;
  left: 5%;
`;
