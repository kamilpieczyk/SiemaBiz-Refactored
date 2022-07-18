import styled from 'styled-components';

import colors from '../../../styles/colors';
import { backdropFilter, flexCenter } from '../../../styles/mixins';
import ApiKey from '../../../API/key';

export const Container = styled.article`
  width: 100vw;
  height: 90vh;
  background: url(${({ image }) => `${ApiKey}uploads/images/${image}`});
  position: relative;
`;

export const TextContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  ${backdropFilter()}
  padding: 20px;
  border-radius: 5px;
  text-align: justify;
  box-shadow: 0 0 30px 0px ${colors.lightGrey};
  ${flexCenter()};
  flex-direction: column;
  a {
    text-decoration: none;
  }
  h1 {
    text-transform: uppercase;
    text-align: center;
  }
`;

export const ArrowButtonContainer = styled.div`
  position: absolute;
  bottom: 15%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
`;

export const ArrowButton = styled.button`
  border: none;
  ${backdropFilter()}
  color: ${colors.main};
`;
