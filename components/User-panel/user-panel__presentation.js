import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './user-panel__styles'

const UserPanelPresentationLayer = ({ children }) => (
  <Container>
    { children }
  </Container>
)

UserPanelPresentationLayer.propTypes = {
  children: PropTypes.element
}

export default UserPanelPresentationLayer