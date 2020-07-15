import styled from 'styled-components';

import colors from '../../../../../styles/colors';
import { mobile } from '../../../../../styles/devices';

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: ${colors.transparentWhite};
  backdrop-filter: blur(5px);
  left: 0;
  top: 0%;
  z-index: 1000;
  opacity: 0;
`;

export const Window = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  background: ${colors.white};
  border-radius: 5px;
  width: 40%;
  height: 0;
  box-shadow: 0 0 8px 2px ${colors.grey};

  @media (max-width: ${mobile}px) {
    width: 90%;
    height: 0;
  }
`;

export const CloseContainer = styled.div`
  color: ${colors.main};
  width: 100%;
  display: flex;
  justify-content: flex-end;
  svg {
    position: relative;
    bottom: 8px;
    left: 8px;
    cursor: pointer;
  }
`;

export const Content = styled.div`
  opacity: 0;
  width: 100%;
  height: 90%;
  padding: 0 5%;
  overflow-y: auto;
`;

export const PrivContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    color: ${colors.main};
    font-size: 1rem;
    text-align: left;
    width: 100%;
    font-weight: 100;
  }
`;
