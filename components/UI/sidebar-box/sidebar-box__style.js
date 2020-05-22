import styled from 'styled-components'

import colors, { main, white } from '../../../styles/colors'
import { mobile } from '../../../styles/devices'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 100%;
  
  ${ ({ light }) => light && `box-shadow: -4px 0px 5px -7px ${ colors.grey };` }
  ${ ({ light }) => light ? `color: ${ white }` : `color: ${ main }` };
  ${ ({ light }) => !light && `background: ${ main };` }
  ${ ({ light }) => !light && `border-radius: 5px;` }
  ${ ({ light }) => !light && `padding: 20px 0;` }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`