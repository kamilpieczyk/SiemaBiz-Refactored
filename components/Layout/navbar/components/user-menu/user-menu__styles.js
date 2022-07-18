import styled from 'styled-components';
import colors from '../../../../../styles/colors';

export const Container = styled.nav`
  position: fixed;
  left: ${({ position }) => position}px;
  top: ${({ isScrolled }) => (isScrolled ? '70px' : '100px')};
  background: ${colors.main};
  border-radius: 5px;
  box-shadow: 0px 0px 20px 0px ${colors.black};
  color: ${colors.white};
  padding: 10px 30px;

  ::before {
    content: '';
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid ${colors.main};
    position: absolute;
    top: -20px;
  }
`;

export const Option = styled.div`
  margin: 10px 0;

  ${({ display }) => {
    if (!display)
      return `
        display: none;
      `;
  }}

  i {
    position: relative;
    top: 7px;
    margin-right: 3px;
  }
  a {
    color: ${colors.white};
    text-decoration: none;
    position: relative;

    ::after {
      content: '';
      position: absolute;
      width: 0%;
      background: ${colors.white};
      height: 1px;
      left: 0;
      bottom: 0;
      transition-duration: 0.3s;
    }

    :hover {
      ::after {
        width: 100%;
      }
    }
  }
`;
