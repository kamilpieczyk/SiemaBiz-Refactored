import styled from 'styled-components'

import colors, { white, ultraTransparentBlack, main } from '../../../styles/colors'
import { backdropFilter } from '../../../styles/mixins'

export const Container = styled.div`
  background: ${ white };
  border: 1px solid ${ ultraTransparentBlack };
  border-radius: 5px;
  width: 100%;
  z-index: 0;
  padding: 20px;

  ${ backdropFilter() }
`

export const Header = styled.h2`
  text-align: center;
  font-weight: 100;
  color: ${ main };
`

export const StageContainer = styled.div`
  padding: 0 10%;
  div{
    display: flex;
    justify-content: center;
    align-items: center;
    button{
      position: relative;
      top: 10px;
    }
  }
`

export const ErrMsg = styled.div`
  color: red;
  font-weight: 500;
  
`