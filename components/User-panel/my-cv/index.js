import React from 'react'
import PropTypes from 'prop-types'

import LogicLayer from './my-cv__logic'
import PresentationLayer from './my-cv__presentation'

const MyCv = ({  }) => (
  <LogicLayer
    render = { props => (
      <PresentationLayer { ...props } />
    ) }
  />
)

MyCv.propTypes = {
  
}

export default MyCv