import React from "react"
import styled from "styled-components"
import { colors } from "../../../../styledVars"

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.white};
  padding: 10px;
  border-radius: 5px;
  font-size: 1.2rem;

  @supports( backdrop-filter: blur() ){
    backdrop-filter: blur(5px);
    background: ${colors.transparentWhite};
  }
`

const Label = styled.label`
  margin-right: 10px;
  color: ${colors.main};
`

const Input = styled.input`
  border: none;
  border-radius: 5px;
  color: ${colors.main};
  font-size: 1.2rem;
  text-align: center;
  outline-color: ${colors.main};
`

export default ( { state, handleInput , ...props } ) => {
  return(
    <Container>
      <Label>
        {
          props.language === "pl"
            ? "wyszukaj użytkownika po nazwie"
            : "search for user by username"
        }:
      </Label>
      <Input 
        value={state.value}
        onChange={e => handleInput( e.target.value )}
      />
    </Container>
  )
}