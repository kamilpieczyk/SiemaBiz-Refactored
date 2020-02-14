import styled from 'styled-components'
import colors from '../../../../../styles/colors'

export const Button = styled.button`
  
  margin: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 5px;
  background: transparent;
  padding: 5px 10px;
  outline: none;
  transition-duration: .2s;
  font-weight: 100;

  :hover{
    border: 1px solid ${ colors.main };
  }
  
  i{
    color: ${ colors.main };
    margin-right: 5px;
    font-size: 2rem;
  }
`