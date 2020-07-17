import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import { useSelector } from 'react-redux';

import GET from '../API/get';
import CooperationOffersSite from '../components/cooperation-offers-site';

const CooperationOffers = ({ cooperationOffers }) => {
  return (
    <Layout>
      <Head>
        <title>cooperation offers - SiemaBiz Forum</title>
      </Head>
      <CooperationOffersSite offers={cooperationOffers} />
    </Layout>
  );
};

CooperationOffers.getInitialProps = async ctx => {
  const cooperationOffers = await GET('get-coop-offers');
  return { cooperationOffers };
};

export default CooperationOffers;
