import styled from 'styled-components';
import colors from '../../../../../styles/colors';

export const Container = styled.div`
  position: fixed;
  top: ${({ isPageScrolled }) => (isPageScrolled ? '60px' : '100px')};
  left: 0;
  background: ${colors.white};
  width: 100%;
  height: ${({ isPageScrolled }) => (isPageScrolled ? window.innerHeight - 60 : window.innerHeight - 100)}px;
  border-radius: 5px;
  border: 2px solid ${colors.main};
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  animation: menuIn 0.4s;
  padding-top: 20px;

  @keyframes menuIn {
    0% {
      opacity: 0;
      height: 0px;
    }
    100% {
      opacity: 1;
      height: ${({ isPageScrolled }) =>
        isPageScrolled ? window.innerHeight - 60 : window.innerHeight - 100}px;
    }
  }
`;

export const Option = styled.div`
  margin: 5px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 0;

  :not(:last-child) {
    border-bottom: 2px dotted ${colors.main};
  }

  a {
    color: ${colors.main};
    font-size: 1.2rem;
    font-weight: 400;
    text-transform: uppercase;
    text-decoration: none;
  }
`;
