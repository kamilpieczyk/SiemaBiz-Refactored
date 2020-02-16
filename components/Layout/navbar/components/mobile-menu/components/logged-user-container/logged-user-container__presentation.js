import React from 'react'
import PropTypes from 'prop-types'

import { Container, User } from './logged-user-container__styles'
import Button from '../../../../../../UI/small-button'
import withClick from '../../../../../../HOC/withClick'
import Icon from '@material/react-material-icon'

const LogoutButton = withClick( Button )

const LoggedUserContainerPresentationLayer = ({ languageSource, loggedUser, logout }) => (
  <Container>
    <User>
      <Icon icon = 'person' />
      { loggedUser }
    </User>
    <LogoutButton 
      onClickFunction = { logout }
    >
      { languageSource.navbar.logout }
    </LogoutButton>
  </Container>
)

LoggedUserContainerPresentationLayer.propTypes = {
  languageSource: PropTypes.object.isRequired,
  loggedUser: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired
}

export default LoggedUserContainerPresentationLayer