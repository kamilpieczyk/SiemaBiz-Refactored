import React from 'react'
import PropTypes from 'prop-types'

import { Button } from './small-button__styles'

const SmallButton = ({ thin, children }) => (
  <Button thin = { thin }>
    { children }
  </Button>
)

SmallButton.propTypes = {
  thin: PropTypes.bool,
}

export default SmallButton