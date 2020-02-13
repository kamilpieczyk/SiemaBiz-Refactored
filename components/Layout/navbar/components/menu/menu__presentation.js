import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import Icon from '@material/react-material-icon'

import { Container, Option } from './menu__styles'

const Presentation =  ({ source, isPageScrolled }) => (
  <Container isPageScrolled = { isPageScrolled } >
    { source.menu.map( item => (

      <Option key={ item.title }>
        <Link href={ item.href }>
          <>
            <Icon
              icon = { item.icon }
              style = { { color: '#97100c', fontSize: '70px' } }
            />
            <p>{ item.title }</p>
          </>
        </Link>
      </Option>

    ) ) }
  </Container>
)

Presentation.propTypes = {
  source: PropTypes.object.isRequired,
  isPageScrolled: PropTypes.bool
}

export default Presentation