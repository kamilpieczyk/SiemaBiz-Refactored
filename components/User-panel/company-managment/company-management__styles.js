import styled from 'styled-components';

import colors from '../../../styles/colors';
import { backdropFilter } from '../../../styles/mixins';
import { mobile } from '../../../styles/devices';

export const Container = styled.div``;

export const ButtonsContainer = styled.div`
  display: flex;
`;

export const CompaniesContainer = styled.div`
  margin-top: 30px;
`;

export const EmployeesContainer = styled.div`
  background: ${({ white }) => (white ? colors.white : colors.main)};
  border-radius: 5px;
  padding: 20px;

  h1 {
    font-size: 1.2rem;
    font-weight: 100;
    color: ${({ white }) => (white ? colors.main : colors.white)};
    text-align: center;
  }

  section {
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
  }
`;

export const EmployeeBox = styled.div`
  background: ${({ white }) => (white ? colors.main : colors.white)};
  color: ${({ white }) => (white ? colors.white : colors.main)};
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: ${({ white }) => (white ? colors.white : colors.main)};
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }

  i {
    cursor: pointer;
    font-size: 1.1rem;
    position: relative;
  }

  div {
    display: flex;
  }
`;

export const CompanieContentContainer = styled.section`
  margin: 10px 0;
  padding: 30px;
  background: ${colors.white};
  border-radius: 5px;
`;

export const JobAdBox = styled.div`
  background: ${colors.ultraWhite};
  border-radius: 5px;
  box-shadow: 0 0 5px ${colors.grey};
  padding: 10px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  div {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  section {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    i {
      color: ${colors.main};
      cursor: pointer;
    }
  }
`;

export const Warning = styled.div`
  background: ${colors.white};
  color: ${colors.main};
  padding: 15px;
  border-radius: 5px;
  text-align: center;
`;
export const AddJobAdWindow = styled.div`
  section {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h2,
  h1 {
    color: ${colors.main};
    font-weight: 100;
  }
  h2 {
    font-size: 1.9rem;
  }
  h1 {
    font-size: 2rem;
    text-align: center;
  }
`;
