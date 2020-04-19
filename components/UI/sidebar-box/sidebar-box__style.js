import styled from 'styled-components'

import { main, white } from '../../../styles/colors'
import { mobile } from '../../../styles/devices'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${ main };
  color: ${ white };
  border-radius: 5px;
  padding: 20px 0;
  width: 100%;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`