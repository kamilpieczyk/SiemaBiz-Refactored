import styled from 'styled-components';

import colors from '../../../styles/colors';
import { mobile } from '../../../styles/devices';

export const FileUploader = styled.div`
  border: ${({ active, succes, err }) =>
    active
      ? `3px dashed ${colors.main}`
      : succes
      ? `2px dashed ${colors.succes}`
      : err
      ? `2px dashed ${colors.error}`
      : `2px dashed ${colors.grey}`};
  color: ${({ active, succes, err }) =>
    active ? colors.main : succes ? colors.succes : err ? colors.error : colors.grey};
  font-weight: ${({ active }) => (active ? 500 : 100)};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10vh 0;
  cursor: pointer;

  i {
    font-size: 3rem;
    font-weight: 500;
    margin-bottom: 5px;
  }

  @media (max-width: ${mobile}px) {
    width: 100%;
  }
`;
