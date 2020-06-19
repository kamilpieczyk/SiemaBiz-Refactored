import styled from 'styled-components';

import colors from '../../../styles/colors';
import { mobile } from '../../../styles/devices';

export const Container = styled.div`
  display: flex;
  width: 95%;
  margin: 10px 0;
  border-bottom: 1px solid ${colors.lightGrey};
  position: relative;
  padding-bottom: 10px;
  div {
    margin-right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    i {
      color: ${colors.main};
    }
  }

  @media (max-width: ${mobile}px) {
    width: 100%;
  }
`;

export const BookingButton = styled.button`
  position: absolute;
  right: 10px;
  padding: 5px 10px;
  background: ${({ booked }) => (booked ? colors.main : 'none')};
  border: ${({ booked }) => (booked ? `1px solid ${colors.main}` : `1px solid ${colors.grey}`)};
  border-radius: 5px;
  color: ${({ booked }) => (booked ? colors.white : colors.grey)};
  cursor: ${({ booked }) => (booked ? 'initial' : 'pointer')};
`;
