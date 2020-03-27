import styled from 'styled-components'

import colors from '../../../../../styles/colors'
import { mobile } from '../../../../../styles/devices'

export const Container = styled.div`
  background: ${ colors.white };
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 10000;
  top: 0;
  left: 0;
`

export const Topbar = styled.div`
  background: ${ colors.main };
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${ colors.white };
  padding: 0 5px;
`

export const ContentContainer = styled.div`
  width: 100%;
  max-height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  padding: 0 15%;

  @media ( max-width: ${ mobile }px ) {
    padding: 0 5%;
  }
`

export const Header = styled.h1`

`

export const NewSection = styled.section`
  width: 100%;
  margin: 30px 0;
  border-top: 2px dashed ${ colors.lightGrey };
  padding-top: 20px;
`

export const SectionButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin: 50px 0 30px 0;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px ${ colors.lightGrey };
  padding: 30px;
`

export const InvisibleDiv = styled.div`
  min-width: 10px;
  min-height: 20px;
  width: 10px;
  height: 20px;
`;

export const ActionButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`  
