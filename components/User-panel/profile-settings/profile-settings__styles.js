import styled from "styled-components"

import { white, main, black } from '../../../styles/colors'
import { backdropFilter } from '../../../styles/mixins'


export const Container = styled.div`

  background: ${ white };
  border-radius: 5px;
  width: 100%;
  z-index: 0;
  padding: 20px;

  ${ backdropFilter() }
`

export const Username = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  i{
    font-size: 4rem;
    font-weight: 500;
    color: ${ main };
  }

  p{
    font-size: 2rem;
    font-weight: 100;
    color: ${ black };
  }
`

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  div{
    display: flex;
    width: 100%;
    position: relative;
  }
`

export const Label = styled.label`
  flex: 3;
  font-weight: 100;
  font-size: 1.2rem;
  border-radius: 5px 0 0 5px;
  background: ${ main };
  color: ${ white };
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Information = styled.div`
  flex: 7;
  color: ${ main };
  font-size: 1.2rem;
  background: ${ white };
  border-radius: 0 5px 5px 0;
  padding: 10px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Edit = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  position: absolute;
  top: 6px;
  right: 0px;
  i{
    color: ${ main };
  }
`

export const InformationUnderEditing = styled.input`
  border-radius: 0 5px 5px 0;
  border: none;
  padding: 10px;
  text-align: center;
  color: ${ main };
  outline-color: ${ main };
  background: ${ white };
  flex: 7;
  overflow: hidden;
`