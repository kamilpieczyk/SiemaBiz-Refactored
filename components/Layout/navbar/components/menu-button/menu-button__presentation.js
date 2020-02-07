import React from 'react'
import PropTypes from 'prop-types'

import { Container, Burger, Text } from './menu-button__style'
import { setMenuActive, setMenuInactive } from '../../../../../Redux/actions'

const Presentation = ({ isClicked, handleClick, isMenuActive, dispatch }) => (
  <Container
    onClick = { () => {
      handleClick();
      if( isMenuActive ) dispatch( setMenuInactive() )
      else dispatch( setMenuActive() )
    } } 
  >
    <Burger isClicked = { isClicked } />
    <Text>MENU</Text>
  </Container>
)

Presentation.propTypes = {
  isClicked: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  isMenuActive: PropTypes.bool,
  dispatch: PropTypes.func
}

export default Presentation