import React from 'react'
import Head from 'next/head'

import Layout from '../components/Layout'
import IndexPage from '../components/index-page'

export default () => (
  <Layout>
    <Head>
      <title>Siemabiz Forum</title>
    </Head>
    <IndexPage />
  </Layout>
)
