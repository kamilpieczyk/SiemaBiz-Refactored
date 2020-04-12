import styled from 'styled-components'

import colors from '../../styles/colors'
import { flexCenter } from '../../styles/mixins'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  margin: 20px 5vw;
`

export const Sidebar = styled.div`
  margin: 0 0 0 50px;
`

export const Content = styled.div`

`

export const SearchLineSeparator = styled.div`
  width: 100%;
  border-bottom: 1px dashed ${ colors.lightGrey };
  margin: 20px 0;
`

export const NoSearchResults = styled.div`
  width: 100%;
  height: 400px;
  ${ flexCenter() }
  flex-direction: column;
  i{
    font-size: 4rem;
    color: ${ colors.grey };
  }
`