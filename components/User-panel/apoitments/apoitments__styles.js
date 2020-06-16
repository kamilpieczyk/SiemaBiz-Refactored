import styled from 'styled-components';

import colors from '../../../styles/colors';
import { mobile } from '../../../styles/devices';

export const Container = styled.div`
  position: relative;
`;

export const Apoitment = styled.div`
  background: ${colors.white};
  width: 100%;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  i {
    color: ${({ available }) => (available ? colors.error : colors.succes)};
  }
`;
