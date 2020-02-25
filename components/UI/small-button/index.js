import React from 'react'
import PropTypes from 'prop-types'

import { Button } from './small-button__styles'

const SmallButton = ({ thin, maxWidth, children }) => (
  <Button thin = { thin } maxWidth = { maxWidth } >
    { children }
  </Button>
)

SmallButton.propTypes = {
  thin: PropTypes.bool,
  maxWidth: PropTypes.bool,
}

export default SmallButton