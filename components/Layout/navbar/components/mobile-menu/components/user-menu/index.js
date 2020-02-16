import React from 'react'

import LogicLayer from './user-menu__logic'
import PresentationLayer from './user-menu__presentation'

export default () => (
  <LogicLayer
    render = { props => <PresentationLayer { ...props } /> }
  />
)