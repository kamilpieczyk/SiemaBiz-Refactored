import styled from 'styled-components';

import colors from '../../../../styles/colors';
import { mobile } from '../../../../styles/devices';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  display: flex;
  padding-top: 100px;

  iframe {
    flex: 1;
    margin: 0;
    width: 50%;
    height: 100%;
  }
`;

export const Info = styled.div`
  flex-direction: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  background: ${colors.main};
  color: ${colors.white};
  div {
    display: flex;
    align-items: center;
    svg {
      position: relative;
      bottom: 3px;
      right: 5px;
    }
  }
`;
