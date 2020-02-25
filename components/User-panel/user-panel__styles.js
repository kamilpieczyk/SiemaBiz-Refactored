import styled from 'styled-components'

import colors from '../../styles/colors'
import { mobile } from '../../styles/devices'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  background: url(/images/index-desktop.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  width: 100vw;
  height: 100vh;
  padding: 150px 5% 0 5%;

  p{
    margin: 0;
  }

  @media( max-width: ${ mobile }px ){
    flex-direction: column-reverse;
    background-size: 300% 100%;
    background-position-x: 80%;
  }
`

export const Content = styled.div`
  flex: 8;
  margin-right: 30px;

  @media( max-width: ${ mobile }px ){
    flex: initial;
    width: 100%;
    margin-right: 0;
  }
`

export const SideMenu = styled.nav`
  flex: 2;

  @media( max-width: ${ mobile }px ){
    flex: initial;
    width: 100%;
    margin-bottom: 30px;
  }
`