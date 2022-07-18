import styled from 'styled-components';

import colors from '../../../styles/colors';
import { mobile } from '../../../styles/devices';

export const Button = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.white};
  width: 20px;
  height: 20px;
  border-radius: 50%;

  i {
    color: ${colors.main};
    font-size: 0.8rem;
  }
`;
