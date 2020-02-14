import styled from 'styled-components'
import colors from '../../../../../styles/colors'

export const Container = styled.button`
  margin: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  
  i{
    color: ${ colors.main };
  }
`