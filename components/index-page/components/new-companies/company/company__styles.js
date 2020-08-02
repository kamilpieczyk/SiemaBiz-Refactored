import styled from 'styled-components';

import colors from '../../../../../styles/colors';
import { mobile } from '../../../../../styles/devices';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5%;
  overflow: hidden;
  cursor: pointer;
  position: relative;

  @media (max-width: ${mobile}px) {
    border: 1px solid ${colors.main};
    margin: 5px;
    border-radius: 10px;
  }

  img {
    width: 100%;
  }

  div {
    width: 100%;
    height: 100%;
    background: ${colors.main};
    position: absolute;
    right: -365px;
    opacity: 0;
    border-radius: 10px;
    color: ${colors.white};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h3,
    p {
      margin: 0;
    }
    span {
      margin-top: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        margin-right: 5px;
      }
    }
  }
`;
