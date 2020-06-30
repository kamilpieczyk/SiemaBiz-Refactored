import styled from 'styled-components';
import colors from '../../../../../styles/colors';

export const Container = styled.div`
  position: relative;
  cursor: pointer;
  margin-right: 5px;
`;

export const Text = styled.div`
  padding-top: 7px;
`;

export const Burger = styled.div`
  margin-right: 5px;
  z-index: 100;
  transition: 0.2s;
  right: 55px;
  width: 35px;
  height: 2px;
  background-color: ${colors.main};
  position: absolute;
  cursor: pointer;
  ${({ isClicked }) =>
    isClicked &&
    `
      transform: rotate(45deg);
      top: 10px;
    `}

  ::before {
    content: '';
    width: 35px;
    height: 2px;
    background-color: ${colors.main};
    position: absolute;
    top: 10px;
    transition: 0.2s;
    ${({ isClicked }) =>
      isClicked &&
      `
      opacity: 0;
    `}
  }

  ::after {
    content: '';
    width: 35px;
    height: 2px;
    background-color: ${colors.main};
    position: absolute;
    top: 20px;
    transition-delay: 0.2s;
    transition: 0.2s;
    ${({ isClicked }) =>
      isClicked &&
      `
      transform: rotate(-90deg);
      top: 0;
    `}
  }
`;
