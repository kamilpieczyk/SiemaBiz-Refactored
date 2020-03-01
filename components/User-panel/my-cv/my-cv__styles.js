import styled from "styled-components"

import colors, { white, ultraTransparentBlack } from '../../../styles/colors'
import { backdropFilter } from '../../../styles/mixins'
import { mobile } from '../../../styles/devices'


export const Container = styled.div`

  background: ${ white };
  border: 1px solid ${ ultraTransparentBlack };
  border-radius: 5px;
  width: 100%;
  z-index: 0;
  padding: 20px;

  ${ backdropFilter() }
`

export const MainDetails = styled.div`
  width: 80%;
  margin-left: 10%;

  @media ( max-width: ${ mobile }px ) {
    margin-left: 5%;
    width: 90%;
  }
`

export const Section = styled.div`
    margin-top: 3px;
    background: ${ colors.transparentWhite };
    width: 100%;
    padding: 50px 20px;
    backdrop-filter: blur( 10px );

    div{
        display: flex;
        flex-direction: column;
        padding: 15px 0;

        input{
            border: none;
            border-radius: 3px;
            font-size: 1rem;
            padding: 5px;
            margin: 5px 0;
            outline-color: ${ colors.main };
        }
    }
`