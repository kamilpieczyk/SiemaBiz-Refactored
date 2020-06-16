import styled from 'styled-components';

import colors from '../../../../../styles/colors';
import { backdropFilter } from '../../../../../styles/mixins';
import { mobile } from '../../../../../styles/devices';

export const Container = styled.div`
  position: absolute;
  background: ${colors.white};
  border: 1px solid ${colors.ultraTransparentBlack};
  border-radius: 5px;
  z-index: 0;
  padding: 20px;
  display: flex;
  justify-content: center;
  top: ${props => props.position + 60}px;
  z-index: 1000;
  ${backdropFilter()}
  width: 335px;

  button {
    i {
      font-size: 0.8rem;
      padding: 0px;
    }
  }

  .date-picker-input {
    border-radius: 5px;
    border: none;
    padding: 10px 20px;
  }

  .react-datepicker__day--keyboard-selected,
  .react-datepicker__day--selected,
  .react-datepicker__time-list-item--selected {
    background: ${colors.main}!important;
    :hover {
      background: ${colors.grey}!important;
    }
  }
`;
