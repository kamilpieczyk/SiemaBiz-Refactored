import styled from 'styled-components';
import colors from '../../../styles/colors';

export const Container = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Dot = styled.div`
  width: ${({ active }) => (active ? '9px' : '7px')};
  height: ${({ active }) => (active ? '9px' : '7px')};
  margin: 5px;
  border-radius: 50%;
  background: ${({ active }) => (active ? colors.main : colors.grey)};
`;
