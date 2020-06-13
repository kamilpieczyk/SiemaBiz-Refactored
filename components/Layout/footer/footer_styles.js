import styled from 'styled-components';

import colors from '../../../styles/colors';
import { mobile } from '../../../styles/devices';

export const Container = styled.footer`
  padding: 20px 5vw;
  margin-top: 20px;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;

  h1 {
    margin: 0 0 10px 0;
    font-size: 1.1rem;
    color: ${colors.darkGrey};
  }
  a {
    color: ${colors.darkGrey};
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }
  svg {
    margin-top: 10px;
    :hover {
      color: ${colors.main};
    }
  }
  img {
    filter: grayscale();
    width: 130px;
  }
  p {
    margin: 0;
  }

  @media (max-width: ${mobile}px) {
    grid-template-columns: 50% 50%;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: ${mobile}px) {
    padding-bottom: 15px;
  }
`;

export const Line = styled.div`
  grid-column-start: 1;
  grid-column-end: 5;
  background: ${colors.lightGrey};
  height: 2px;
  margin-bottom: 50px;
  @media (max-width: ${mobile}px) {
    grid-column-start: 1;
    grid-column-end: 3;
  }
`;

export const Signature = styled.div`
  grid-column-start: 1;
  grid-column-end: 5;
  text-align: center;
  margin-top: 60px;
  border-top: 1px solid ${colors.lightGrey};
  padding-top: 20px;

  i {
    color: ${colors.darkGrey};
    font-size: 1rem;
    position: relative;
    top: 3px;
    right: 2px;
  }
  @media (max-width: ${mobile}px) {
    grid-column-start: 1;
    grid-column-end: 3;
    padding-bottom: 40px;
  }
`;

export const Separator = styled.div`
  grid-column-start: 1;
  grid-column-end: 5;
  height: 30px;
  @media (max-width: ${mobile}px) {
    display: none;
  }
`;
