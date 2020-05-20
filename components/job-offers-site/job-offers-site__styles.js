import styled from 'styled-components'

import colors from '../../styles/colors'

export const Container = styled.div`

`

export const SearchBox = styled.div`
  width: 100vw;
  height: 250px;
  display: flex;
  padding: 130px 10vw 0 10vw;

  div{
    margin-right: 20px;
  }
`

export const SortButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10vw 30px 10vw;

  div{
    color: ${ colors.grey };
    margin-right: 20px;
  }
`

export const SortButton = styled.button`
  border: 1px solid ${ colors.grey };
  background: ${ ({ isActive }) => isActive ? colors.grey : 'none' };
  border-radius: 20px;
  padding: 5px 10px;
  color: ${ ({ isActive }) => isActive ? colors.white : colors.grey };
  cursor: pointer;
  outline: none;
  margin-right: 10px;
`

export const InputTitle = styled.div`
  margin-bottom: 20px;
  h1{
    color: ${ colors.black };
    font-weight: 500;
    font-size: 1.1rem;
    margin: 0;
  }
  p{
    color: ${ colors.darkGrey };
    font-size: .9rem;
    font-weight: 100;
    margin: 0;
  }
`

export const Content = styled.section`
  display: grid;
  grid-template-columns: 70% 30%;
  margin: 0 5vw;
`

export const JobOffersContainer = styled.div`

`