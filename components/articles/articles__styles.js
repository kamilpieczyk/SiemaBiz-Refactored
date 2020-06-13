import styled from 'styled-components';

import colors from '../../styles/colors';
import { mobile } from '../../styles/devices';

export const Container = styled.div``;

export const ContentContainer = styled.section`
  display: grid;
  grid-template-columns: 70% 30%;

  @media (max-width: ${mobile}px) {
    grid-template-columns: 100%;
  }
`;

export const Sidebar = styled.nav`
  padding-right: 5vw;
  padding-top: 20px;
`;
