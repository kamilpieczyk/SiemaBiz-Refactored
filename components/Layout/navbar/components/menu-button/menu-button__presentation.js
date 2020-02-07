import React from 'react'
import PropTypes from 'prop-types';

import { Container, Burger, Text } from './menu-button__style'

const Presentation = ({ isClicked, handleClick }) => (
  <Container onClick = { handleClick } >
    <Burger isClicked = { isClicked } />
    <Text>MENU</Text>
  </Container>
)

Presentation.propTypes = {
  isClicked: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default Presentation