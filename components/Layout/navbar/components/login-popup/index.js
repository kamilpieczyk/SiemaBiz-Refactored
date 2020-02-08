import React from 'react'

import Present from './login-popup__presentation'
import Logic from './login-popup__logic'

export default props => (
  <Logic
    { ...props }
    render = { props => <Present { ...props } /> }
  />
)