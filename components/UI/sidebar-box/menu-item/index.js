import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import Icon from '@material/react-material-icon'

import { Container } from './menu-item__styles'

const MenuItem = ({ icon, href, children, light }) => (
  <Link href = { href }>
    <Container light = { light }>
      <Icon icon = { icon } />
      <a>{ children }</a>
    </Container>
  </Link>
)

MenuItem.propTypes = {
  icon: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
}

export default MenuItem