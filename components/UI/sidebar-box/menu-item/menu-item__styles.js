import styled from 'styled-components'

import colors from '../../../../styles/colors'

export const Container = styled.div`

  color: ${ ({ light }) => light ? colors.main : colors.white };
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
      font-weight: 400;
    }
  }

  i{
    font-size: 1.5rem;
    margin-right: 10px;
  }
`