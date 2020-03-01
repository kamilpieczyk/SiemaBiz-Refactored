import styled from 'styled-components'

import colors, { main, black } from '../../../styles/colors'

export const Container = styled.div`
  border: ${ ({ focus }) => focus ? '2px solid '+main: '1px solid '+colors.darkGrey };
  border-radius: 5px;
  padding: 5px;
  position: relative;
  margin-top: 20px;
  transition-duration: .8s;
`

export const Inp = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  width: 100%;
  font-size: 1.4rem;
  text-align: center;
  margin: 5px 0;
  color: ${ ({ focus }) => focus ? main : colors.darkGrey };
  transition-duration: .8s;
`

export const Label = styled.label`
  position: absolute;
  color: ${ ({ focus }) => focus ? main : colors.darkGrey };
  top: -21px;
  left: -5px;
  font-size: 1.2rem;
  font-weight: 100;
  padding: 0 5px;
  transition-duration: .8s;
`