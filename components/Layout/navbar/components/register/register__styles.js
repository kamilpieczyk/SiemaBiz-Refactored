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
  height: 350px;
  /* transition-duration: 0.4s; */
`;
