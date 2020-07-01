import styled from 'styled-components';

import colors from '../../../../../styles/colors';
import { mobile } from '../../../../../styles/devices';

export const Container = styled.div`
  position: fixed;
  top: ${({ position }) => position.y}px;
  left: ${({ position }) => position.x}px;
  z-index: 1000;
  background: ${colors.white};
  width: 20%;
  transition-duration: 0.4s;
  border-radius: 5px;
  box-shadow: 0 0 7px ${colors.grey};
  padding: 10px;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 1.2rem;
    margin-left: 6px;
  }
  svg {
    color: ${colors.main};
  }
`;

export const Information = styled.div`
  width: 100%;
  color: ${colors.main};
  text-align: center;
  font-size: 0.7rem;
`;

export const Form = styled.div`
  margin-top: 40px;
`;
