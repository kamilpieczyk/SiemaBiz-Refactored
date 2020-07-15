import styled from 'styled-components';

import colors from '../../../../../styles/colors';
import { state } from '../../@types';

export const Container = styled.div`
  background: ${colors.white};
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
`;

export const UsernameContainer = styled.div`
  display: flex;
  svg {
    color: ${colors.main};
  }
`;

export const ActionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  svg {
    color: ${colors.main};
    cursor: pointer;
  }
`;
