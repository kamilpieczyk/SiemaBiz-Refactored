import styled from 'styled-components';

import colors, { white, ultraTransparentBlack, main } from '../../../styles/colors';
import { backdropFilter } from '../../../styles/mixins';
import { mobile } from '../../../styles/devices';

export const Container = styled.div`
  background: ${white};
  border: 1px solid ${ultraTransparentBlack};
  border-radius: 5px;
  width: 100%;
  z-index: 0;
  padding: 20px;

  ${backdropFilter()}
`;

export const MainDetails = styled.div`
  width: 80%;
  margin-left: 10%;

  @media (max-width: ${mobile}px) {
    margin-left: 5%;
    width: 90%;
  }
`;

export const Section = styled.div`
  width: 80%;
  margin-left: 10%;
  /* border-top: 1px dotted ${colors.grey}; */

  @media (max-width: ${mobile}px) {
    margin-left: 5%;
    width: 90%;
  }
`;

export const SectionInSection = styled.div`
  border: 1px solid ${colors.main};
  border-radius: 5px;
  padding: 30px;
`;

export const TitleOfSection = styled.h2`
  width: 100%;
  text-align: center;
  color: ${main};
`;
