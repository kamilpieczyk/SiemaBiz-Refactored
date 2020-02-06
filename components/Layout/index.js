import React from 'react'
import { Provider } from 'react-redux'

import store from '../../Redux/store'

import Navbar from './navbar'
import { Container } from './layaut__style'

export default ({ children }) => (
  <Provider store = { store } >
    <Container>
      <Navbar />
      { children }
    </Container>
  </Provider>
)