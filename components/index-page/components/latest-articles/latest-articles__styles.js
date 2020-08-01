import styled from 'styled-components';

import colors from '../../../../styles/colors';
import { mobile } from '../../../../styles/devices';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  margin: 0 10%;
  width: 80%;
  height: 250px;

  @media (max-width: ${mobile}px) {
    grid-template-columns: 50% 50%;
    height: auto;
    width: 90%;
    margin: 0 5%;
  }
`;
