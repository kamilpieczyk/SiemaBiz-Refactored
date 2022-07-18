import styled from 'styled-components';

import colors from '../../styles/colors';
import { mobile } from '../../styles/devices';
import { backdropFilter } from '../../styles/mixins';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  background: url(/images/index-desktop.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  width: 100vw;
  min-height: 100vh;
  padding: 150px 5% 0 5%;

  p {
    margin: 0;
  }

  @media (max-width: ${mobile}px) {
    flex-direction: column-reverse;
    background-size: 300% 100%;
    background-position-x: 80%;
  }
`;

export const Content = styled.div`
  flex: 8;
  margin-right: 30px;

  @media (max-width: ${mobile}px) {
    flex: initial;
    width: 100%;
    margin-right: 0;
  }
`;

export const SideMenuExtender = styled.div`
  flex: 2;
`;

export const SideMenu = styled.nav`
  flex: 2;

  @media (max-width: ${mobile}px) {
    flex: initial;
    width: 100%;
    margin-bottom: 30px;
  }

  @media (min-width: ${mobile}px) {
    ${({ isScrolled }) => {
      if (isScrolled)
        return `
          position: fixed;
          width: 240px;
          right: 4%;
          top: 80px;
        `;
    }}
  }
`;

export const SectionContainer = styled.div`
  background: ${colors.white};
  border: 1px solid ${colors.ultraTransparentBlack};
  border-radius: 5px;
  width: 100%;
  z-index: 0;
  padding: 20px;

  ${backdropFilter()}
`;
