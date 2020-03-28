import styled from 'styled-components'

import colors from '../../../../../../../styles/colors'
import { mobile } from '../../../../../../../styles/devices'

export const Button = styled.button`
  background: ${ colors.main };
  color: ${ colors.white };
  border: none;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  font-size: 1rem;
  font-weight: 100;
  width: 100px;
  height: 100px;
  i{
    font-size: 3rem;
  }

  @media ( max-width: ${ mobile }px ) {
    width: 80px;
    height: 80px;
    i{
      font-size: 2rem;
    }
  }
`