import styled from 'styled-components'

import colors from '../../../../styles/colors'
import { mobile } from '../../../../styles/devices'
import { backdropFilter, absoluteCenter, flexCenter } from '../../../../styles/mixins'

export const Container = styled.div`
  width: 100vw;
  height: ${ ({ small }) => small ? '40vh' : '100vh' };
  background-size: ${ ({ small }) => small ? '100% 100vh' : '100% 100%' };
  background-repeat: no-repeat;
  background-position: center;
  background-image: url( images/index-desktop.png );
  position: relative;

  @media ( max-width: ${ mobile }px ) {
    background-size: ${ ({ small }) => small ? '400% 100vh' : '400% 100%' };
    background-position-x: 80%;
    height: ${ ({ small }) => small ? '30vh' : '70vh' };
  }
`

export const Box = styled.div`
  ${ absoluteCenter() }
  padding: 40px 30px;
  border-radius: 5px;
  ${ ({ small }) => small && 'top: 70%;' }

  h1{
    color: ${ colors.white };
    text-shadow: 0px 0px 3px ${ colors.black };
    font-weight: 100;
    font-size: 2rem;
    text-align: center;
  }
`

export const Input = styled.div`
  width: 50vw;
  height: 40px;
  display: flex;
  @media ( max-width: ${ mobile }px ) {
    width: 90vw;
  }

  .icon{
    background: ${ colors.main };
    color: ${ colors.white };
    border-radius: 5px 0 0 5px;
    flex: 1;
    ${ flexCenter() };
  }

  input{
    border: none;
    text-align: center;
    background: ${ colors.white };
    height: 100%;
    flex: 14;
    border-radius: 0 5px 5px 0;
    caret-color: ${ colors.main };
  }
`