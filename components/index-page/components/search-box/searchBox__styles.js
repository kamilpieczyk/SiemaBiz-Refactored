import styled from 'styled-components';

import colors from '../../../../styles/colors';
import { mobile } from '../../../../styles/devices';
import { backdropFilter, absoluteCenter, flexCenter } from '../../../../styles/mixins';

export const Container = styled.div`
  width: 100vw;
  height: ${({ small }) => (small ? '200px' : '100vh')};
  background-size: ${({ small }) => (small ? '100% 100vh' : 'cover')};
  background-repeat: no-repeat;
  background-position: ${({ movement }) => `center -${movement / 3}px`};
  background-image: ${({ small }) => (small ? 'none' : 'url( images/index-desktop.png )')};
  background-attachment: fixed;
  position: relative;
  opacity: ${({ opacity }) => opacity};

  @media (max-width: ${mobile}px) {
    background-size: ${({ small }) => (small ? '400% 100vh' : '400% 100%')};
    background-position-x: 80%;
    height: ${({ small }) => (small ? '30vh' : '70vh')};
  }
`;

export const Box = styled.div`
  ${absoluteCenter()}
  padding: 40px 30px;
  border-radius: 5px;
  ${({ small }) => small && 'top: 70%;'}

  h1 {
    color: ${({ small }) => (small ? colors.main : colors.white)};
    text-shadow: 0px 0px 3px ${colors.black};
    font-weight: 100;
    font-size: 2rem;
    text-align: center;
  }
`;

export const Input = styled.div`
  width: 50vw;
  height: 40px;
  display: flex;
  @media (max-width: ${mobile}px) {
    width: 90vw;
  }

  .icon {
    background: ${colors.main};
    color: ${colors.white};
    border-radius: 5px 0 0 5px;
    flex: 1;
    ${flexCenter()};
    ${({ small }) => small && `box-shadow: 1px 1px 5px ${colors.lightGrey};`}
  }

  input {
    border: none;
    text-align: center;
    background: ${({ small }) => (small ? colors.ultraWhite : colors.white)};
    height: 100%;
    flex: 14;
    border-radius: 0 5px 5px 0;
    caret-color: ${colors.main};
    ${({ small }) => small && `box-shadow: 1px 1px 5px ${colors.lightGrey};`}
  }
`;
