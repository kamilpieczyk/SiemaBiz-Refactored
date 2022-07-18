import styled from 'styled-components';
import colors from '../../../styles/colors';

export const Container = styled.div`
  width: 85px;
  height: 30px;
  border-radius: 15px;
  display: flex;
  cursor: pointer;
  background-color: ${colors.white};
  margin: 0 0 0 10px;
  position: relative;
  box-shadow: 0 0 8px ${colors.lightGrey};
`;

export const Dot = styled.div`
  position: absolute;
  width: 35%;
  height: 100%;
  border-radius: 50%;
  z-index: 100;
  transition-duration: 0.2s;
  background-color: ${colors.main};

  ${({ isSwitched }) => {
    if (isSwitched) return 'left: 65%;';
    else return 'left: 0;';
  }}
`;

export const Text = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%) translateY(-50%);
  text-transform: uppercase;
  z-index: 99;
  color: ${colors.grey};
`;
