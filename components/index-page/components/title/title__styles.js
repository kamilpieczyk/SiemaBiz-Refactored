import styled from 'styled-components';

import colors from '../../../../styles/colors';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    color: ${colors.main};
    font-size: 2rem;
    margin-right: 10px;
  }
  h1 {
    text-align: center;
    font-weight: 100;
    color: ${colors.black};
    font-size: 1.5rem;
  }
`;
