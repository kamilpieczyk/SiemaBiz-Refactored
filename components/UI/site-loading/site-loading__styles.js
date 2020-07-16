import styled from 'styled-components';

import colors from '../../../styles/colors';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${colors.transparentWhite};
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0%;
  z-index: 1000000;
`;

export const LoadingContainer = styled.div`
  padding: 20px;
  border-radius: 5px;
  background: ${colors.white};
  box-shadow: 0 0 15px 3px ${colors.grey};
`;
