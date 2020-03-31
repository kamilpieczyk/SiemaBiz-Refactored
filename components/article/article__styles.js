import styled from 'styled-components'

import colors from '../../styles/colors'
import { mobile } from '../../styles/devices'
import { flexCenter } from '../../styles/mixins'

export const Container = styled.div`

`

export const ContentContainer = styled.article`
  display: grid;
  grid-template-columns: 70% 30%;
  margin: 30px 5%;

  @media ( max-width: ${ mobile }px ) {
    grid-template-columns: 100%;
  }
`

export const Content = styled.article`
  
`

export const Sidebar = styled.nav`
  padding-left: 5vw;
  .sidebarBox{
    width: 100%;
    ${
      ({ isScrolled }) => isScrolled && `
        position: fixed;
        top: 90px;
        right: 5%;
        width: 22%;
        `
    }
  }
`

export const Introduction = styled.section`
  color: ${ colors.main };
  font-size: 1.2rem;
  font-weight: 400;
  text-align: justify;
`

export const Paragraph = styled.section`
  color: ${ colors.black };
  font-size: 1rem;
  font-weight: 100;
  text-align: justify;

  h2{
    text-align: center;
    color: ${ colors.main };
    font-weight: 400;
  }
  p{
    ::first-letter{
      padding-left: 20px;
      font-weight: 400;
    }
  }
`

export const ImageSection = styled.section`
  width: 100%;
  ${ flexCenter() }
  margin: 40px 0;
`