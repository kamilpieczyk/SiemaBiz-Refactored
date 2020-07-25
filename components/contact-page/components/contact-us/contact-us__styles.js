import styled from 'styled-components';

import colors from '../../../../styles/colors';
import { mobile } from '../../../../styles/devices';

export const Container = styled.section`
  width: 100%;
  padding: 20px 0;
  display: grid;
  grid-template-columns: 50% 50%;

  @media (max-width: ${mobile}px) {
    grid-template-columns: 100%;
  }
`;

export const Form = styled.div`
  grid-column-start: 2;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    color: ${colors.main};
    margin: 0;
  }

  @media (max-width: ${mobile}px) {
    grid-column-start: 1;
    width: 100%;
    padding: 10px 10%;
  }
`;

export const Box = styled.div`
  grid-column-start: 1;
  grid-row-start: 1;
  background: ${colors.main};
  height: 100%;
  width: 80%;
  margin: 0 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${colors.white};

  @media (max-width: ${mobile}px) {
    grid-row-start: 2;
  }
`;
