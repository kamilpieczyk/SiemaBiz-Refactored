import React from 'react';
import Head from 'next/head';

import Layout from '../components/Layout';
import IndexPage from '../components/index-page';
import GET from '../API/get';

const Index = ({ articles, jobOffers }) => {
  return (
    <Layout>
      <Head>
        <title>Siemabiz Forum</title>
      </Head>
      <IndexPage articles={articles} jobOffers={jobOffers} />
    </Layout>
  );
};

Index.getInitialProps = async ctx => {
  let articles = await GET('articles/shorts');
  let jobOffers = await GET('get-all-job-offers');
  articles = articles.slice(0, 5);
  jobOffers = jobOffers.slice(0, 5);

  return { articles, jobOffers };
};

export default Index;
