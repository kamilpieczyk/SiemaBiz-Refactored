import React from 'react'
import { useSelector } from 'react-redux'

import Navbar from './navbar'
import { Container } from './layaut__style'
import Popup from '../UI/popup-window'

export default ({ children }) => {
  const isPopupActive = useSelector( s => s.popup.isActive );

  return(
    <Container>
      <Navbar />
      { isPopupActive && <Popup /> }
      { children }
    </Container>
  )
}