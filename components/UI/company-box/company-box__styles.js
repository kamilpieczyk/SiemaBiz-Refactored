import styled from 'styled-components';

import colors from '../../../styles/colors';
import { flexCenter } from '../../../styles/mixins';

export const Container = styled.article`
  display: grid;
  grid-template-columns: 30% 70%;
  grid-column-gap: 10px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid ${colors.lightGrey};
  padding: 20px;
  :hover {
    border: 2px solid ${colors.main};
    .image-container {
      border-right: 1px dashed ${colors.main};
    }
    button {
      background: ${colors.main};
      color: ${colors.white};
    }
  }

  .image-container {
    border-right: 1px dashed ${colors.lightGrey};
    ${flexCenter()}
    img {
      width: 80%;
    }
  }

  .content-container {
    margin: 0 10px;
  }

  .button-container {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  h3 {
    color: ${colors.main};
    margin-bottom: 0;
  }

  span {
    color: ${colors.darkGrey};
  }

  p {
    text-align: justify;
  }
`;
