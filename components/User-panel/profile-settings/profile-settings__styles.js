import styled from "styled-components"

import { white, main, black } from '../../../styles/colors'
import { backdropFilter } from '../../../styles/mixins'


export const Container = styled.div`

  background: ${ white };
  border-radius: 5px;
  width: 100%;
  z-index: 0;

  ${ backdropFilter() }
`

export const Username = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  i{
    font-size: 4rem;
    font-weight: 500;
    color: ${ main };
  }

  p{
    font-size: 2rem;
    font-weight: 100;
    color: ${ black };
  }
`