import React from 'react'

import Logic from './menu__logic'
import Present from './menu__presentation'

export default () => (
  <Logic
    render = { props => <Present { ...props } /> }
  />
)