import styled from 'styled-components'

import colors from '../../../../../styles/colors'

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