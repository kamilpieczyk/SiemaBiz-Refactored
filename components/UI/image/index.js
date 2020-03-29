import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './image__styles'

const Image = ({ title, url }) => {

  return(
    <Container>
      <img src = { url } />
      { title && <p>{ title }</p> }
    </Container>
  )
}

Image.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string.isRequired,
}

export default Image;