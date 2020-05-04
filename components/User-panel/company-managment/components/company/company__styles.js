import styled from 'styled-components'

import colors from '../../../../../styles/colors'

export const Container = styled.div`
  border-radius: 5px;
  width: 100%;
  background: ${ colors.white };
  padding: 20px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 0 10px 0;
  height: 100px;

  i{
    color: ${ colors.main };
    cursor: pointer;
  }

  section{
    display: flex;
  }
`

export const ActionContainer = styled.div`

`

export const Action = styled.div`
  display: flex;
  cursor: pointer;

  p{
    font-size: .9rem;
    color: ${ colors.main };
  }

  i{
    font-size: .9rem;
    position: relative;
    top: 1px;
    margin-right: 3px;
  }

  :hover{
    p{
      text-decoration: underline;
    }
  }
`