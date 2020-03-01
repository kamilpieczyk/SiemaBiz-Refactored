import styled from "styled-components"

import { white, main, black, ultraTransparentBlack } from '../../../styles/colors'
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