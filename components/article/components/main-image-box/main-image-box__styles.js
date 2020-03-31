import styled from 'styled-components'

import colors from '../../../../styles/colors'
import { backdropFilter, flexCenter } from '../../../../styles/mixins'
import { mobile } from '../../../../styles/devices'

import apiKey from '../../../../API/key'

export const Container = styled.div`
  background: ${ ({ img }) => `url( ${ apiKey }uploads/images/${ img } )` };
  width: 100vw;
  height: 100vh;
  position: relative;
`

export const Title = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX( -50% ) translateY( -50% );
  text-align: center;
  border-radius: 10px;
  padding: 30px;
  color: ${ colors.black };
  
  ${ backdropFilter() }

  @media ( max-width: ${ mobile }px ) {
    width: 90%;
  }
`

export const InfoBox = styled.div`
  position: absolute;
  padding: 10px 15px;
  border-radius: 5px;
  ${ flexCenter() }
  bottom: 20px;
  right: 30px;
  div{
    ${ flexCenter() }
    i{
      position: relative;
      bottom: 2px;
      color: ${ colors.main };
      margin-right: 5px;
    }
  }
  ${ backdropFilter() }   
`