import React from 'react'
import PropTypes from 'prop-types'

import { Container, Option } from './user-menu__styles'

const UserMenuPresentationLayer = ({ buttonPosition, isPageScrolled, languageSource }) => (
  <Container position = { buttonPosition } isScrolled = { isPageScrolled } >
    {
      languageSource.navbar.usermenu.map( ({ title, href }) => (
        <Option key = { title }>
          <a href ={ href } >{ title }</a>
        </Option>
      ) )
    }
  </Container>
)

UserMenuPresentationLayer.propTypes = {
  buttonPosition: PropTypes.number,
  isPageScrolled: PropTypes.bool,
  languageSource: PropTypes.object
}

export default UserMenuPresentationLayer