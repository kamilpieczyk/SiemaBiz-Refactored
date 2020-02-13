import React from 'react'

import Navbar from './navbar'
import { Container } from './layaut__style'

export default ({ children }) => (
  <Container>
    <Navbar />
    { children }
  </Container>
)