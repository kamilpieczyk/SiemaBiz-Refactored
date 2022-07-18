import styled from 'styled-components';

import colors from '../../../styles/colors';
import { mobile } from '../../../styles/devices';

export const Container = styled.div`
  color: ${colors.error};
  border-radius: 5px;
  border: 2px solid ${colors.error};
  position: relative;
  width: 100%;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  i {
    position: absolute;
    top: -23px;
    left: 10px;
    font-size: 2.5rem;
  }
`;
