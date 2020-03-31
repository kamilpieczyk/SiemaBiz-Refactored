import styled from 'styled-components'

import colors from '../../../styles/colors'
import { backdropFilter } from '../../../styles/mixins'
import ApiKey from '../../../API/key'

export const Container = styled.article`
  width: 100vw;
  height: 90vh;
  background: url( ${ ({ image }) => `${ ApiKey }uploads/images/${ image }` } );
  position: relative;
`

export const TextContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  ${ backdropFilter() }
  padding: 20px;
  border-radius: 5px;
`