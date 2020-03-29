import styled from 'styled-components'

import colors from '../../../styles/colors'

export const Container = styled.div`
  background: linear-gradient(180deg, rgba(246,246,246,1) 0%, rgba(217,217,217,1) 100%);
  padding: 20px;
  box-shadow: 0px 0px 14px 0px ${ colors.lightGrey };
  border-radius: 5px;

  p{
    width: 100%;
    text-align: center;
    margin: 20px 0 0 0;
    color: ${ colors.grey };
  }
`