import styled from 'styled-components';

import colors from '../../../../styles/colors';
import { mobile } from '../../../../styles/devices';

export const Container = styled.div`
  border: ${({ isActive }) => (isActive ? '2px solid ' + colors.main : '1px solid ' + colors.darkGrey)};
  border-radius: 50px;
  height: 35px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;

  i {
    color: ${colors.main};
  }
  @media (max-width: ${mobile}px) {
    width: 100%;
    input {
      width: 100%;
    }
    i {
      position: relative;
      right: 10px;
    }
  }
`;

export const Input = styled.input`
  border: none;
  background: none;
  outline: none;
  color: ${colors.main};
`;
