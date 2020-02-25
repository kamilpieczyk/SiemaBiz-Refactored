import styled from 'styled-components'

import colors from '../../../styles/colors'

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${ ({ thin }) => thin ? 'none' : colors.main };
  border-radius: 5px;
  text-align: center;
  margin: 0 5px 0 5px;
  color: ${ ({ thin }) => thin ? colors.main : colors.white };
  border: 1px solid ${ colors.main };
  padding: 10px 15px;
  font-size: 0.8rem;
  cursor: pointer;
  font-family: 'Josefin Sans';
  ${ ({ maxWidth }) => `width: 100%` }
`