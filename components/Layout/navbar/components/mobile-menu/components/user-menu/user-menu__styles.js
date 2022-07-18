import styled from 'styled-components';
import colors from '../../../../../../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const Option = styled.div`
  padding: 5px;
  a {
    color: ${colors.main};
    text-decoration: none;
    font-size: 1.5rem;
  }
`;
