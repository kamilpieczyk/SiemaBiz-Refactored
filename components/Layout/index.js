import React from 'react'
import { Provider } from 'react-redux'

import store from '../../Redux/store'

import Logic from './layout__logic'
import Presentation from './layout__presentation'

export default ({ children }) => (
  <Provider store = { store } >
    <Logic
      render = { props => <Presentation { ...props } >{ children }</Presentation> }
    />
  </Provider>
)