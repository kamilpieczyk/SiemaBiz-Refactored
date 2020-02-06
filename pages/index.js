import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import Layout from '../components/Layout'

export default () => (
  <Layout>
    <Container>
      <Head>
        <title>Siemabiz Forum</title>
      </Head>
      
    </Container>
  </Layout>
)

const Container = styled.div`
  width: 100vw;
  height: 120vh;
  background: url('/images/index-desktop.png');
`