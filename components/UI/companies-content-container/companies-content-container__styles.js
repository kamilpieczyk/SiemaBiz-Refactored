import styled from 'styled-components';

import colors from '../../../styles/colors';
import { flexCenter } from '../../../styles/mixins';

export const Container = styled.div``;

export const Sites = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Site = styled.div`
  color: ${colors.main};
  margin: 0 5px;
  cursor: pointer;
  ${({ current }) => current && 'font-weight: 500;'}
  :not( :last-child )::after {
    content: '-';
    margin-left: 5px;
  }
`;

export const CompaniesContainer = styled.section`
  padding: 20px 5%;
`;

export const NoResults = styled.div`
  width: 100%;
  height: 400px;
  ${flexCenter()}
  flex-direction: column;
  i {
    font-size: 4rem;
    color: ${colors.grey};
  }
`;
