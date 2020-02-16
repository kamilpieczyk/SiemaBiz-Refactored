import React from 'react'

import LogicLayer from './logged-user-container__logic'
import PresentationLayer from './logged-user-container__presentation'

export default () => (
  <LogicLayer
    render = { props => <PresentationLayer { ...props } /> }
  />
)