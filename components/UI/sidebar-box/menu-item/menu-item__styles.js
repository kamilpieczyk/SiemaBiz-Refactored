import styled from 'styled-components'

import colors from '../../../../styles/colors'

export const Container = styled.div`
  color: ${ colors.white };
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-bottom: 5px;

  a{
    font-size: 1rem;
    margin-left: 5px;
    :hover{
      text-decoration: underline;
    }
  }

  i{
    font-size: 1.5rem;
  }
`