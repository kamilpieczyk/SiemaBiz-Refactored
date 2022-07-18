import styled from 'styled-components';

import colors from '../../../styles/colors';
import { flexCenter } from '../../../styles/mixins';

export const Container = styled.div`
  ${flexCenter()}

  i {
    margin-right: 10px;
    font-size: 2rem;
    color: ${colors.main};
  }

  a {
    color: ${colors.main};
  }
`;
