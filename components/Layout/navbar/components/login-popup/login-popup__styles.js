import styled from 'styled-components';
import colors from '../../../../../styles/colors';

export const Container = styled.div`
  border-radius: 5px;
  position: fixed;
  background: ${colors.white};
  padding: 20px 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  right: 10%;
  top: ${({ isScrolled }) => (isScrolled ? '80px' : '110px')};
  z-index: 1000;
  box-shadow: 0 0 5px ${colors.grey};
  opacity: 0;

  @supports (backdrop-filter: blur()) {
    background: ${colors.transparentWhite};
    backdrop-filter: blur(5px);
  }

  label {
    color: ${colors.main};
    ::after {
      content: ':';
    }
  }
`;

export const Input = styled.input`
  border-radius: 3px;
  border: none;
  background: ${colors.white};
  margin: 5px 0;
  font-size: 1rem;
  padding: 5px;
  box-shadow: 0 0 10px ${colors.grey};
  color: ${colors.main};
  text-align: center;
`;

export const Warning = styled.div`
  width: 100%;
  color: ${colors.main};
  font-size: 0.8rem;
  text-align: center;
  margin: 5px 0;
`;

export const ShowPasswordEye = styled.div`
  position: absolute;
  top: 50%;
  right: 3px;
  transform: translateY(-50%);
  color: ${colors.main};
  cursor: pointer;
`;
