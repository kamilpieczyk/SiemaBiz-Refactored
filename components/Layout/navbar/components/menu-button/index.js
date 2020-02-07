import React from 'react'

import Present from './menu-button__presentation'
import Logic from './menu-button__logic'

export default () => (
  <Logic
    render = { props => <Present { ...props } /> }
  />
)