import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import MaterialIcon from '@material/react-material-icon'

import { Container } from './url__styles'

const Url = ({ title, url }) => {

  return(
    
    <Container>
      <MaterialIcon icon = 'link' />
      <Link href = { url }>
        <a>
          {
            title
              ? <p>{ title }</p>
              : <p>{ url.slice( 0, 40 ) }</p>
          }
        </a>
      </Link>
    </Container>
  )
}

Url.propTypes = {

}

export default Url;