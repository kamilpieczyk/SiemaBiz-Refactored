import styled from 'styled-components';

import colors from '../../../../styles/colors';
import { mobile } from '../../../../styles/devices';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Content = styled.div``;

export const Photo = styled.div`
  border: 8px solid ${colors.main};
  width: 118px;
  height: 118px;
  border-radius: 50%;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 110px;
    height: 110px;
    border-radius: 50%;
    border: 6px solid ${colors.white};
  }
`;

export const Name = styled.div`
  font-size: 1.5rem;
  display: flex;
  p {
    margin: 0;
    margin-right: 5px;
  }
`;

export const IconContent = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  margin-top: 5px;
  p {
    margin: 0;
  }
  svg {
    margin-right: 5px;
    color: ${colors.main};
    font-size: 1.2rem;
  }
`;

export const Description = styled.div`
  width: 50%;
  text-align: justify;
  h2 {
    font-weight: 200;
    margin-bottom: 5px;
  }

  @media (max-width: ${mobile}px) {
    width: 90%;
  }
`;
