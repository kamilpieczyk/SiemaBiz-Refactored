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
  display: grid;
  grid-template-columns: 15% 20% 10% 30% 15% 10%;
  padding: 10px;
  margin-bottom: 10px;
  div {
    position: relative;
    display: flex;
    align-items: center;
    overflow-x: hidden;
    i {
      color: ${({ available }) => (available ? colors.error : colors.succes)};
    }
  }
  section {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    overflow-x: hidden;
    svg {
      color: ${colors.main};
    }
  }

  @media (max-width: ${mobile}px) {
    grid-template-columns: 20% 35% 10% 25% 0% 10%;
  }
`;
