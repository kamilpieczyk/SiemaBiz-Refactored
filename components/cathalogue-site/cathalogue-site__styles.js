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

export const SearchResult = styled.article`
  display: grid;
  grid-template-columns: 30% 70%;
  grid-column-gap: 10px;
  width: 100%;
  box-shadow: 0 0 10px ${ colors.grey };
  border-radius: 5px;
  padding: 20px;
  background: ${ colors.ultraWhite };

  .image-container{
    border-right: 1px dashed ${ colors.main };
    ${ flexCenter() }
    img{
      width: 80%;
    }
  }

  .button-container{
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  h3{
    color: ${ colors.main };
    margin-bottom: 0;
  }

  span{
    color: ${ colors.darkGrey };
  }
`