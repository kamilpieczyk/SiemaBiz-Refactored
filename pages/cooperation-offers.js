import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import { useSelector } from 'react-redux';

import GET from '../API/get';
import CooperationOffersSite from '../components/cooperation-offers-site';

const CooperationOffers = ({ cooperationOffers }) => {
  const language = useSelector(s => s.language.source.cooperationOffersPage);

  return (
    <Layout>
      <Head>
        <title>{language.pageTitle} SiemaBiz Forum</title>
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
