import styled from 'styled-components'

import colors from '../../../styles/colors'

export const Container = styled.article`
  background: ${ colors.main };
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: 30% 70%;
`

export const Image = styled.img`
  width: 100%;
  height: 170px;
`

export const Content = styled.div`
  width: 100%;
  color: ${ colors.white };
  padding: 10px;

  h2{
    margin: 0;
  }

  p{
    margin: 0;
    text-align: justify;
  }
`

export const ReadArticle = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding-top: 5px;
  a{
    color: ${ colors.white };
    font-weight: 500;
  }
`