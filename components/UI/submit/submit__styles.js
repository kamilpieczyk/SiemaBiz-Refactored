import styled from 'styled-components'
import colors from '../../../styles/colors'

export const SubmitButton = styled.input`
  background: ${ ({ thin }) => thin ? 'none' : colors.main };
  border-radius: 5px;
  text-align: center;
  margin: 10px 0;
  width: 100%;
  color: ${ ({ thin }) => thin ? colors.main : colors.white };
  border: 1px solid ${ colors.main };
  padding: 15px 20px;
  font-size: 1rem;
  cursor: pointer;
  font-family: 'Josefin Sans';
`