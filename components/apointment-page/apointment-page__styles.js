import styled from 'styled-components';

import colors from '../../styles/colors';
import { mobile } from '../../styles/devices';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  padding: 130px 5% 5% 20px;

  @media (max-width: ${mobile}px) {
    grid-template-columns: 100%;
  }
`;

export const Content = styled.section``;

export const SidebarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    color: ${colors.main};
    font-size: 1rem;
    text-align: left;
    margin: 0 0 10px 0;
    width: 80%;
  }
`;
