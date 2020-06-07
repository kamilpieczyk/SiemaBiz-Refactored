import styled from 'styled-components';

import { main, lightGrey } from '../../../../styles/colors';

export const Container = styled.div`
  margin: 20px 0;
  display: flex;
`;

export const City = styled.a`
  color: ${lightGrey};
  text-decoration: none;
  margin-right: 5px;
  cursor: pointer;
  :hover {
    color: ${main};
    text-decoration: underline;
  }
`;
