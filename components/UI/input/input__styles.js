import styled from 'styled-components'

import colors, { main, black, ultraWhite, grey, white } from '../../../styles/colors'

export const Container = styled.div`
  border: ${ ({ focus }) => focus ? '2px solid '+main : 'none' };
  border-radius: 5px;
  padding: 5px;
  position: relative;
  margin-top: 20px;
  background-color: ${ ultraWhite };
  box-shadow: ${ ({ focus }) => focus ? 'none' : `0 0 5px 1px ${ colors.lightGrey }` };
  width: 100%;

  @supports( backdrop-filter: blur() ){
    background-color: ${ white };
    /* box-shadow: none; */
  }
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

export const Textarea = styled.textarea`
  border: none;
  background-color: transparent;
  outline: none;
  width: 100%;
  height: 250px;
  font-size: 1rem;
  font-weight: 100;
  text-align: center;
  margin: 5px 0;
  color: ${ main };
  font-weight: ${ ({ focus }) => focus ? 500 : 100 };
  overflow-x: hidden;
  resize: none;
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