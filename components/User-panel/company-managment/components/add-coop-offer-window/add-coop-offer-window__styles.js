import styled from 'styled-components';

import colors from '../../../../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ChoseFieldContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    color: ${colors.main};
  }
`;
