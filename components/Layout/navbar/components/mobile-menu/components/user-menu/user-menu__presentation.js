import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

import { Container, Option } from './user-menu__styles'

const UserMenuPresentationLayer = ({ userMenu }) => (
  <Container>
    {
      userMenu.map( ( item, index ) => (
        <Option key = { index }>
          <Link href = { item.href } >
            <a>
              { item.title }
            </a>
          </Link>
        </Option>
      ) )
    }
  </Container>
)

UserMenuPresentationLayer.propTypes = {
  userMenu: PropTypes.array.isRequired,
}

export default UserMenuPresentationLayer