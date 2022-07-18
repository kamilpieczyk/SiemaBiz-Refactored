import styled from 'styled-components';

import colors from '../../../styles/colors';
import { mobile } from '../../../styles/devices';

export const Button = styled.div`
  cursor: pointer;
  display: flex;

  div {
    position: relative;
    top: 5px;

    @media (max-width: ${mobile}px) {
      display: none;
    }
  }
  color: ${({ color }) => (color ? color : colors.white)};
`;
