import styled from 'styled-components';

import colors from '../../../../styles/colors';
import { mobile } from '../../../../styles/devices';

export const Container = styled.div`
  width: 100%;
  padding: 20px 20%;
  @media (max-width: ${mobile}px) {
    padding: 20px 5%;
  }
`;
