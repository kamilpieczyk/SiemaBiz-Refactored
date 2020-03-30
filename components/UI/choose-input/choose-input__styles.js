import styled from 'styled-components'

import colors from '../../../styles/colors'
import { flexCenter } from '../../../styles/mixins'

export const Container = styled.div`
  display: flex;
  position: relative;
`

export const MainField = styled.div`
  background: ${ colors.white };
  ${ flexCenter() }
  padding: 0px 20px;
  border-radius: 5px 0 0 5px;
  border: 1px solid ${ colors.main };
  color: ${ colors.main };
  height: 40px;
  min-width: 200px;
  max-width: 200px;
  max-height: 40px;
  overflow: hidden;
`

export const Button = styled.button`
  background: ${ colors.main };
  color: ${ colors.white };
  border-radius: 0 5px 5px 0;
  border: none;
  ${ flexCenter() }
`

export const Fields = styled.div`
  position: absolute;
  background: ${ colors.white };
  border-radius: 5px;
  top: 40px;
  width: 100%;
  box-shadow: 0 0 5px 1px ${ colors.lightGrey };
  z-index: 100;
  ${ flexCenter() }
  flex-direction: column;
  padding: 20px 0;
  display: ${
    ({ active }) => active ? 'block' : 'none'
  };
`

export const Field = styled.div`
  width: 100%;
  text-align: center;
  padding: 5px 0;
  color: ${ colors.black };
  cursor: pointer;

  :hover{
    background: ${ colors.main };
    color: ${ colors.white };
  }
`