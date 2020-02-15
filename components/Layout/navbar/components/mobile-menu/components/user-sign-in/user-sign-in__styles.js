import styled from 'styled-components'
import colors from '../../../../../../../styles/colors'

export const Container = styled.form`
  width: 90%;
  border: 2px dotted ${ colors.main };
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Input = styled.input`
  border: 1px solid ${ colors.main };
  border-radius: 5px;
  color: ${ colors.main };
  text-align: center;
  width: 100%;
  font-size: 2rem;
  margin-bottom: 5px;
  padding: 3px;
`

export const Message = styled.div`
  width: 100%;
  color: ${ colors.main };
  text-align: center;
  margin: 8px 0;
`