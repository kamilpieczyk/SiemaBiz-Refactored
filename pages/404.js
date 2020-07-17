import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

import Page404 from '../components/404';

export default () => {
  return (
    <Layout>
      <Head>
        <title>404 - SiemaBiz Forum</title>
      </Head>
      <Page404 />
    </Layout>
  );
};
