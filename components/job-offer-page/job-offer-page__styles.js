import styled from 'styled-components';

import colors from '../../styles/colors';
import { mobile } from '../../styles/devices';

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 70% 30%;
  padding: 150px 5vw 100px 5vw;

  @media (max-width: ${mobile}px) {
    grid-template-columns: 100%;
  }
`;

export const Content = styled.section`
  position: relative;

  img {
    max-height: 80px;
    max-width: 300px;
  }
`;

export const Title = styled.div`
  margin-left: 15px;

  h1 {
    margin: 0;
    color: ${colors.black};
    font-size: 1.4rem;
    font-weight: 500;
  }
  h2 {
    margin: 0;
    color: ${colors.black};
    font-size: 1.1rem;
    font-weight: 400;
  }
  h3 {
    margin: 0;
    color: ${colors.lightGrey};
    font-size: 1rem;
    font-weight: 100;
    margin-top: 2px;
  }
  h4 {
    margin: 0;
    color: ${colors.lightGrey};
    font-size: 0.8rem;
    font-weight: 100;
    margin-top: 2px;
  }
`;

export const Head = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: ${mobile}px) {
    flex-direction: column;
    margin-top: 30px;
  }
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 70px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    i {
      color: ${colors.main};
      font-size: 2rem;
      margin-right: 10px;
    }
    p {
      color: ${colors.black};
      font-size: 1rem;
    }
  }
`;

export const Description = styled.article`
  text-align: justify;
  width: 90%;
  margin-top: 30px;
`;

export const DutiesReqirements = styled.div`
  margin-top: 40px;

  h2 {
    font-size: 1rem;
    margin: 0 0 10px 0;
    color: ${colors.main};
  }
  div {
    display: flex;
    align-items: center;

    i {
      color: ${colors.main};
    }
  }
`;

export const ApplyButton = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border-radius: 5px;
  border: 2px solid ${colors.main};
  color: ${colors.main};
  padding: 5px 10px;
  right: 5vw;
  top: 0;
  cursor: pointer;

  :hover {
    background: ${colors.main};
    color: ${colors.white};
  }
`;

export const LoadingButton = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 5px;
  border: 2px solid ${colors.main};
  color: ${colors.main};
  padding: 5px 10px;
  right: 5vw;
  top: 0;
  cursor: pointer;

  img {
    height: 30px;
    margin-right: 5px;
  }
`;

export const Applied = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border-radius: 5px;
  border: 1px solid ${colors.grey};
  color: ${colors.grey};
  padding: 10px 15px;
  right: 5vw;
  top: 0;
  cursor: pointer;
`;
