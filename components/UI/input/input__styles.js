import styled from 'styled-components'

import colors, { main, black, white } from '../../../styles/colors'

export const Container = styled.div`
  border: ${ ({ focus }) => focus ? '2px solid '+main : 'none' };
  border-radius: 5px;
  padding: 5px;
  position: relative;
  margin-top: 20px;
  background-color: ${ white };
`

export const Inp = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  width: 100%;
  font-size: 1.4rem;
  text-align: center;
  margin: 5px 0;
  color: ${ main };
  font-weight: ${ ({ focus }) => focus ? 500 : 100 };
`

export const Label = styled.label`
  position: absolute;
  color: ${ main };
  top: -21px;
  left: -5px;
  font-size: 1.2rem;
  font-weight: ${ ({ focus }) => focus ? 500 : 100 };
  padding: 0 5px;
`