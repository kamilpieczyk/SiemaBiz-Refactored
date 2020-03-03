import styled from "styled-components"

import { black, darkGrey } from '../../../styles/colors'
import { mobile } from '../../../styles/devices'

export const Container = styled.div`
  display: flex;
  align-items: center;
`

export const PreTitle = styled.h2`
  margin: 0;
  font-weight: 100;
  font-size: 1.7rem;
  color: ${ darkGrey };

  @media( max-width: ${ mobile }px ){
    font-size: .9rem;
  }
`

export const Title = styled.h1`
  margin: 0;
  font-weight: 100;
  font-size: 1.9rem;
  color: ${ black };
  @media( max-width: ${ mobile }px ){
    font-size: 1rem;
  }
`