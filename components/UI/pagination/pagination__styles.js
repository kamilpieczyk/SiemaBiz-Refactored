import styled from 'styled-components';

import { main } from '../../../styles/colors';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Site = styled.div`
  color: ${main};
  font-weight: ${({ isCurrent }) => (isCurrent ? 400 : 100)};
  cursor: pointer;

  :not(:last-child) {
    ::after {
      content: '-';
      padding: 0 3px;
    }
  }
`;
