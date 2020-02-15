import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

import { Container, Option } from './mobile-menu__style'
import UserSignIn from './components/user-sign-in'

const MobileMenuPresentationLayer = ({ isPageScrolled, menuItems, isUserLogged }) => (
  <Container isPageScrolled = { isPageScrolled } >
    {
      isUserLogged
        ? null
        : <UserSignIn />
    }
    {
      menuItems.map( ( item, index ) => (
        <Option key = { index } >
          <Link href = { item.href }>
            <a>{ item.title }</a>
          </Link>
        </Option>
      ))
    }
  </Container>
)

MobileMenuPresentationLayer.propTypes = {
  isPageScrolled: PropTypes.bool,
  menuItems: PropTypes.array.isRequired,
  isUserLogged: PropTypes.string
}

export default MobileMenuPresentationLayer