import styled from 'styled-components'
import colors from '../../../styles/colors'

export const Container = styled.nav`
  position: fixed;
  width: 100vw;
  height: 100px;
  background: ${ colors.white };
  display: flex;
  align-items: center;
  padding: 0 10% 0 10%;
  
  @supports( backdrop-filter: blur() ){
    background: ${ colors.transparentWhite };
    backdrop-filter: blur( 5px );
  }
`

export const LogoContainer = styled.div`

  img{
    width: 155px;
    height: 85px;
  }
`