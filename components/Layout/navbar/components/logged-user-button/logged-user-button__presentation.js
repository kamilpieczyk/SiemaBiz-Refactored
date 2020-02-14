import React from 'react'
import PropTypes from 'prop-types'
import Icon from '@material/react-material-icon'

import { Container } from './logged-user-button__styles'

const LoggedUserButtonPresentationLayer = ({ username }) => (
  <Container>
    <Icon icon = 'person' />
    { username }
  </Container>
)

LoggedUserButtonPresentationLayer.propTypes = {
  username: PropTypes.string.isRequired
}

export default LoggedUserButtonPresentationLayer;