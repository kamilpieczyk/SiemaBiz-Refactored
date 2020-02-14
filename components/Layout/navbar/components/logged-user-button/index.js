import React from 'react'

import Logic from './logged-user-button__logic'
import PresentationLayer from './logged-user-button__presentation'

export default () => (
  <Logic
    render = { props => <PresentationLayer { ...props } /> }
  />
)