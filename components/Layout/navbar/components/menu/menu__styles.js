import styled from 'styled-components'

import colors from '../../../../../styles/colors'

export const Container = styled.nav`
  margin: 0 2% 0 2%;
  width: 96%;
  height: 150px;
  position: fixed;
  border-radius: 5px;
  left: 0;
  top: 110px;
  display: flex;
  background-color: ${ colors.white };
  box-shadow: 0px 0px 15px 1px ${ colors.grey };
  transition-delay: .3s;
  animation: menu-animation .5s;

  @keyframes menu-animation{
    0%{
      opacity: 0;
      left: -100vw;
      filter: blur(5px);
    }
    40%{
      opacity: .2;
      filter: blur(3px);
    }
    100%{
      opacity: 1;
      left: 0;
      filter: blur(0px);
    }
  }
`