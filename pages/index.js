import React from 'react';
import Head from 'next/head';

import Layout from '../components/Layout';
import IndexPage from '../components/index-page';
import GET from '../API/get';

const Index = ({ articles, jobOffers, companies }) => {
  return (
    <Layout>
      <Head>
        <title>Siemabiz Forum</title>
      </Head>
      <IndexPage articles={articles} jobOffers={jobOffers} companies={companies} />
    </Layout>
  );
};

Index.getInitialProps = async ctx => {
  let articles = await GET('articles/shorts');
  let jobOffers = await GET('get-all-job-offers');
  let companies = await GET('get-companies');
  articles = articles.slice(0, 5);
  jobOffers = jobOffers.slice(0, 5);
  companies = companies.companies.slice(0, 3);

  return { articles, jobOffers, companies };
};

export default Index;
