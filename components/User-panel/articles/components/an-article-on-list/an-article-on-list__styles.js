import styled from 'styled-components';

import colors, { main, white } from '../../../../../styles/colors';
import { mobile } from '../../../../../styles/devices';
import { flexCenter } from '../../../../../styles/mixins';

export const Container = styled.div`
  background: ${white};
  border-radius: 5px;
  width: 100%;
  display: grid;
  grid-template-columns: 5% 30% 20% 20% 25%;
  color: ${main};
  padding: 20px 10px;

  @media (max-width: ${mobile}px) {
    grid-template-columns: 40% 30% 30%;
  }
`;

export const Lp = styled.div`
  text-align: center;
  font-weight: 500;
  position: relative;
  top: 7px;

  @media (max-width: ${mobile}px) {
    display: none;
  }
`;

export const Element = styled.div`
  overflow: hidden;
  ${flexCenter()}

  @media ( max-width: ${mobile}px ) {
    max-height: 14px;
  }

  i {
    position: relative;
    top: -3px;
    margin-right: 3px;

    @media (max-width: ${mobile}px) {
      display: none;
    }
  }

  ${({ dontDisplay }) => {
    if (dontDisplay)
      return `
        @media ( max-width: ${mobile}px ) {
          display: none;
        }
      `;
  }}
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
