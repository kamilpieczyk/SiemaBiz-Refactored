import styled from 'styled-components';

import { mobile } from '../../../../../styles/devices';
import colors from '../../../../../styles/colors';

export const Container = styled.div`
  width: 100%-5px;
  height: 100%-5px;
  border-radius: 10px;
  margin: 5px;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  ::before {
    content: '';
    background: ${({ image }) => (image ? `url(${image})` : colors.main)};
    background-size: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    transition-duration: 0.3s;
    ${({ isBlur }) => isBlur && `filter: blur(5px) grayscale(80%);`}
  }
`;

export const TitleBox = styled.div`
  color: ${colors.white};
  text-shadow: 0 0 3px ${colors.darkGrey};
  padding: 10px;
  z-index: 105;
  position: relative;
  h2 {
    margin: 0;
  }
  div {
    display: flex;
    align-items: center;
    margin-right: 10px;
    p {
      margin: 5px 0 0 0;
    }
    svg {
      margin-right: 5px;
    }
  }
`;

export const ButtonBox = styled.div`
  position: relative;
  z-index: 105;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
  opacity: 0;
`;
