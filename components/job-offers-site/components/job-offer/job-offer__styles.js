import styled from 'styled-components'

import colors from '../../../../styles/colors'

export const Container = styled.div`
  border: 1px solid ${ colors.lightGrey };
  border-radius: 5px;
  margin-bottom: 30px;
  margin-right: 50px;
  padding: 20px;
  position: relative;

  :hover{
    border: 2px solid ${ colors.main };
  }
`

export const Title = styled.h2`
  margin: 0;
`
export const CompanyName = styled.h3`
  margin: 0;
  font-weight: 400;
  color: ${ colors.black };
`
export const City = styled.h4`
  margin: 0;
  font-weight: 100;
  color: ${ colors.black };
`
export const Wages = styled.h4`
  margin: 10px 0;
  font-weight: 400;
  color: ${ colors.black };
`
export const Description = styled.p`
  color: ${ ({ isHover }) => isHover ? colors.main : colors.grey };
`
export const Footer = styled.div`
  display: flex;
  margin-top: 30px;
  justify-content: space-between;
`
export const Industry = styled.div`
  color: ${ colors.lightGrey };
`
export const DateContainer = styled.div`
  color: ${ colors.lightGrey };
`
export const ButtonContainer = styled.div`
  display: ${ ({ isHover }) => isHover ? 'block' : 'none' };
  position: absolute;
  top: 20px;
  right: 20px;
`
export const NewTag = styled.div`
  color: ${ colors.succes };
  margin-bottom: 10px;
  display: flex;
  align-items: center;

  i{
    font-size: 1rem;
    margin-right: 3px;
  }
`