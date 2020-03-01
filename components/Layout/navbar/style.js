import styled from 'styled-components'
import colors from '../../../styles/colors'

export const Container = styled.nav`
  position: fixed;
  width: 100vw;
  height: ${ ({ scroll }) => scroll ? '60px' : '100px' };
  background: ${ colors.ultraWhite };
  display: flex;
  align-items: center;
  padding: 0 10% 0 10%;
  transition-duration: .5s;
  z-index: 1000;
  ${
    ({ scroll }) => scroll && `box-shadow:  0px 1px 30px ${ colors.grey };`
  }
  
  
  @supports( backdrop-filter: blur() ){
    background: ${ colors.transparentWhite };
    backdrop-filter: blur( 5px );
  }
`

export const LogoContainer = styled.div`
  flex: 3;
  img{
    width: ${ ({ scroll, device }) => device === "mobile" ? '40px' : scroll ? '40px' : '155px' };
    height: ${ ({ scroll, device }) => device === "mobile" ? '40px' : scroll ? '40px' : '85px' };
  }
`

export const ButtonsContainer = styled.div`
  flex: 7;
  display: flex;
  justify-content: flex-end;
  align-items: center;

`