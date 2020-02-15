import React from 'react'

import LogicLayer from './user-sign-in__logic'
import PresentationLayer from './user-sign-in__presentation'

export default () => (
  <LogicLayer
    render = { props => <PresentationLayer { ...props } /> }
  />
)