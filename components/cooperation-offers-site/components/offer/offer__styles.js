import styled from 'styled-components';

import colors from '../../../../styles/colors';

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid ${colors.lightGrey};
  padding: 25px;
  margin-bottom: 20px;
  position: relative;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
`;

export const CompanyName = styled.a`
  margin: 0;
  font-size: 1.17rem;
  font-weight: 400;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

export const City = styled.a`
  margin: 0;
  font-size: 1rem;
  font-weight: 300;
  cursor: pointer;
  text-decoration: none;
  color: ${colors.black};
  :hover {
    text-decoration: underline;
  }
`;

export const Description = styled.p`
  color: ${colors.lightGrey};
  font-size: 1rem;
  font-weight: 100;
  text-align: justify;
`;

export const Date = styled.p`
  color: ${colors.lightGrey};
  position: absolute;
  margin: 0;
  top: 25px;
  right: 25px;
`;

export const Industry = styled.h3`
  font-size: 1rem;
  color: ${colors.black};
`;
