import styled from 'styled-components';

import colors from '../../../../../../../styles/colors';

export const Container = styled.div`
  border: ${({ isFocus }) => (isFocus ? `2px solid ${colors.main}` : `1px solid ${colors.grey}`)};
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 5px;
  svg {
    color: ${colors.main};
  }
`;

export const Inpt = styled.input`
  background: none;
  border: none;
  width: 100%;
  text-align: center;
  color: ${colors.grey};
  :focus {
    outline: none;
    border: none;
    color: ${colors.main};
  }
  &:-webkit-autofill:focus,
  &:-webkit-autofill {
    background: none;
    border: none;
    -webkit-text-fill-color: ${colors.main};
  }
`;

export const Error = styled.div`
  color: ${colors.error};
  width: 100%;
  text-align: center;
  margin: 5px;
`;
