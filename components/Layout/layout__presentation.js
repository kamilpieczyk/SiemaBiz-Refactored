import React from 'react'
import { useSelector } from 'react-redux'

import Navbar from './navbar'
import { Container } from './layaut__style'
import Popup from '../UI/popup-window'
import ChoiceWindow from '../UI/choice-window'

export default ({ children }) => {
  const isPopupActive = useSelector( s => s.popup.isActive );
  const isChoiceWindowActive = useSelector( s => s.choiceWindow.active );

  return(
    <Container>
      <Navbar />
      { isPopupActive && <Popup /> }
      { isChoiceWindowActive && <ChoiceWindow /> }
      { children }
    </Container>
  )
}