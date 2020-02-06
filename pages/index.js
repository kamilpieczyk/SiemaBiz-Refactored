import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import Navbar from '../components/Layout/navbar'

export default () => (
  <Container>
    <Head>
      <title>Siemabiz Forum</title>
    </Head>
    <Navbar />
    
  </Container>
)

const Container = styled.div`
  width: 100vw;
  height: 120vh;
  background: url('/images/index-desktop.png');
`