import styled from 'styled-components';

import colors from '../../../../../styles/colors';

export const Container = styled.div``;

export const DropZone = styled.div`
  background: ${({ isActive }) => (isActive ? colors.main : 'none')};
  padding: 50px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ isActive }) => (isActive ? colors.white : colors.main)};
  font-weight: 500;
  border: ${({ isActive }) => (isActive ? 'none' : `2px dashed ${colors.main}`)};

  i {
    color: ${({ isActive }) => (isActive ? colors.white : colors.main)};
    font-size: 2rem;
    position: relative;
    right: 5px;
  }
`;

export const ChooseInputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
