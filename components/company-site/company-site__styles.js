import styled from 'styled-components'

import colors from '../../styles/colors'
import { backdropFilter, flexCenter } from '../../styles/mixins'
import { mobile } from '../../styles/devices'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  ${ ({ isLoading }) => isLoading && `background: ${ colors.map };` }
`

export const Map = styled.div`
  position: relative;
`

export const LocationMark = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX( -50% ) translateY( -50% );
  z-index: 100;
  color: ${ colors.main };
  
  i{
    font-size: 6rem;
    position: relative;
    bottom: 20px;
  }
`

export const Label = styled.div`
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY( -50% );
  z-index: 100;
  ${ backdropFilter() }
  box-shadow: 0 0 20px ${ colors.lightGrey };
  border-radius: 5px;
  padding: 40px;

  strong{
    color: ${ colors.main };
    i{
      position: relative;
      top: 5px;
    }
  }

  div{
    margin-bottom: 5px;
  }

  a{
    color: ${ colors.main };
  }

  @media ( max-width: ${ mobile }px ) {
    bottom: 5vw;
    top: initial;
    left: 50%;
    transform: translateX( -50% );
    padding: 20px;
    width: 90%;
    height: auto;
  }
`

export const Content = styled.section`
  display: grid;
  grid-template-columns: 70% 30%;
  padding: 20px 5vw;

  @media ( max-width: ${ mobile }px ) {
    grid-template-columns: 100%;
  }
`

export const CompanyContent = styled.div`
  order: 1;
  @media ( max-width: ${ mobile }px ) {
    order: 2;
  }

  h1{
    color: ${ colors.main };
  }

  h2{
    color: ${ colors.darkGrey };
    font-size: 1.2rem;
  }

  p{
    text-align: justify;
  }
`

export const Sidebar = styled.menu`
  order: 2;

  @media ( max-width: ${ mobile }px ) {
    order: 1;
    width: 100%;
    
  }
`

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 10vh;
  left: 50%;
  transform: translateX( -50% );
  z-index: 100;

`

export const UserBox = styled.div`
  border-radius: 5px;
  padding: 8px 15px;
  background: ${ ({ employee }) => employee ? colors.lightGrey : colors.main  };
  color: ${ colors.white };
  margin: 0 3px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  i{
    color: ${ colors.error };
  }
`

export const UsersContainer = styled.div`
  display: flex;
  width: 100%;
`