import styled from 'styled-components';
import colors from '../../../../../../../styles/colors';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5px;

  i {
    font-size: 2rem;
    color: ${colors.main};
  }
`;
