import styled from 'styled-components'

import colors from '../../../../../styles/colors'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const LoadingBox = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const CVBox = styled.div`
  width: 60vw;
`
export const MainInformation = styled.section`
  background: ${ colors.main };
  width: 100%;
  padding: 20px;
  border-radius: 5px 5px 0 0;
  display: flex;

  i{
    color: ${ colors.white };
    font-size: 10rem;
  }

  p{
    color: ${ colors.white };
  }

  h1{
    margin: 0;
    color: ${ colors.white };
    text-transform: uppercase;
  }

  div{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  section{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`

export const CvSectionsContainer = styled.div`
  border: 1px solid ${ colors.main };
  border-top: none;
  border-radius: 0 0 5px 5px;
`

export const CvSection = styled.section`
  padding: 20px 10%;
  h1{
    margin: 0 0 10px 0;
    color: ${ colors.black };
    text-transform: uppercase;
    i{
      font-size: 2rem;
      position: relative;
      top: 5px;
      color: ${ colors.main };
    }
  }
`

export const CvSectionItem = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 0 0 10px 0;

  strong{
    text-transform: uppercase;
  }
  h2{
    flex: 2;
    font-size: 1rem;
    color: ${ ({ grey }) => grey ? colors.darkGrey : colors.main };
    margin: 0;
  }
  div{
    flex: 1;
    ${ ({ grey }) => grey && `color: ${ colors.darkGrey };` }
  }
  p{
    flex: 2;
    ${ ({ grey }) => grey && `color: ${ colors.darkGrey };` }
  }
`

export const CvSectionItemSmall = styled.div`
  margin: 0 0 5px 0;
  font-weight: 100;

  ::before{
    content: "•";
    color: ${ colors.main };
    font-weight: 500;
    font-size: 1.4rem;
  }
`

export const NavButtonsContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  i{
    color: ${ colors.main };
    cursor: pointer;
    font-size: 2rem;
  }
`