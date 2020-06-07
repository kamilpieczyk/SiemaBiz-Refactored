import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  width: 100%;
  padding: 0 5%;
  display: grid;
  grid-template-columns: 70% 30%;
  padding-top: 150px;
`;

export const Content = styled.article`
  margin-right: 5%;
`;

export const NothingToShow = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;