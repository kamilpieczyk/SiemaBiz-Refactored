import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

import GET from '../API/get';
import ContactPage from '../components/contact-page';

const Company = ({}) => {
  return (
    <Layout>
      <Head>
        <title>Contact - SiemaBiz Forum</title>
        <ContactPage />
      </Head>
    </Layout>
  );
};

Company.getInitialProps = async ctx => {
  return {};
};

export default Company;
