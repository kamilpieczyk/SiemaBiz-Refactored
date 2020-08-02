import styled from 'styled-components';

import { mobile } from '../../../../styles/devices';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  width: 80%;
  margin: 0 10%;
  height: 250px;

  @media (max-width: ${mobile}px) {
    height: 100px;
    width: 90%;
    margin: 0 5%;
  }
`;
