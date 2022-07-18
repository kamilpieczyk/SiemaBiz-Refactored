import styled from 'styled-components';

import colors from '../../../styles/colors';

export const Container = styled.article`
  /* background: ${colors.main}; */
  border: 1px solid ${colors.lightGrey};
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: 30% 70%;
`;

export const Image = styled.img`
  width: 80%;
  height: ${({ imageWidth }) => (imageWidth ? imageWidth : 170)}px;
  /* border-radius: 60%; */
`;

export const AuthorAndDate = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  h3 {
    margin: 0;
    font-size: 0.8rem;
    font-weight: 400;
    color: ${colors.black};
    color: ${colors.main};
    i {
      font-size: 0.8rem;
      position: relative;
      top: 2px;
    }
  }
  h4 {
    margin: 0;
    font-size: 0.8rem;
    font-weight: 100;
    color: ${colors.black};
  }
  p {
    margin: 0;
    font-size: 0.9rem;
    font-weight: 100;
    color: ${colors.grey};
  }
`;

export const Content = styled.div`
  width: 100%;
  color: ${colors.black};
  padding: 10px;

  h2 {
    margin: 0;
  }

  p {
    margin: 0;
    text-align: justify;
    color: ${colors.grey};
    a {
      color: ${colors.black};
      text-decoration: none;
    }
  }
`;

export const ReadArticle = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding-top: 5px;
  a {
    color: ${colors.black};
    font-weight: 500;
    text-decoration: none;
    :hover {
      color: ${colors.main};
      text-decoration: underline;
    }
  }
`;
