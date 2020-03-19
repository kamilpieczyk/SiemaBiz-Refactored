import styled from "styled-components"
import colors from "../../../styles/colors"

export const ContentFrame = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Header = styled.h1`
  color: ${colors.main};
  font-size: 1.2rem;
  font-weight: 100;
  text-align: center;
`

export const ErrorMessage = styled.div`
  border: 2px solid ${ colors.error };
  border-radius: 5px;
  color: ${ colors.error };
  padding: 20px;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  font-weight: 500;
  i{
    position: relative;
    top: 6px;
    right: 3px;
  }
`