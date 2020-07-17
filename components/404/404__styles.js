import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    margin: 0;
    color: ${colors.main};
    font-size: 7rem;
  }
  svg {
    color: ${colors.main};
  }
  div {
  }
  p {
  }
`;
