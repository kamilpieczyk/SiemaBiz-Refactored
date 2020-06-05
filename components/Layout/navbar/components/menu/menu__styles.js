import styled from 'styled-components';

import colors from '../../../../../styles/colors';

export const Container = styled.nav`
  margin: 0 2% 0 2%;
  width: 96%;
  height: 180px;
  position: fixed;
  border-radius: 5px;
  left: 0;
  top: ${({ isPageScrolled }) => (isPageScrolled ? '70px' : '110px')};
  transition-duration: 0.3s;
  display: flex;
  background-color: ${colors.white};
  box-shadow: 0px 0px 15px 1px ${colors.grey};
  transition-delay: 0.3s;
  animation: menu-animation 0.5s;

  @keyframes menu-animation {
    0% {
      opacity: 0;
      left: -100vw;
      filter: blur(5px);
    }
    40% {
      opacity: 0.2;
      filter: blur(3px);
    }
    100% {
      opacity: 1;
      left: 0;
      filter: blur(0px);
    }
  }
`;
export const Option = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;

  :not(:last-child)::after {
    content: '';
    border-right: 1px dashed ${colors.main};
    height: 60%;
    position: absolute;
    right: 0;
  }

  a {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  p {
    color: ${colors.main};
    font-weight: 400;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  img {
    max-height: 50%;
  }
`;
