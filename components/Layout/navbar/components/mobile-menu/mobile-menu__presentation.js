import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

import { Container, Option } from './mobile-menu__style'
import UserSignIn from './components/user-sign-in'
import LoggedUserContainer from './components/logged-user-container'
import UserMenu from './components/user-menu'

const MobileMenuPresentationLayer = ({ isPageScrolled, menuItems, isUserLogged }) => (
  <Container isPageScrolled = { isPageScrolled } >

    { // VISIBLE ONLY FOR LOGGED USER
      isUserLogged
        ? <LoggedUserContainer />
        : <UserSignIn />
    }

    { // MENU STUFF
      menuItems.map( ( item, index ) => (
        <Option key = { index } >
          <Link href = { item.href }>
            <a>{ item.title }</a>
          </Link>
        </Option>
      ))
    }

    { // VISIBLE ONLY FOR LOGGED USER
      isUserLogged && (
        <UserMenu />
      )
    }
  </Container>
)

MobileMenuPresentationLayer.propTypes = {
  isPageScrolled: PropTypes.bool,
  menuItems: PropTypes.array.isRequired,
  isUserLogged: PropTypes.string
}

export default MobileMenuPresentationLayer