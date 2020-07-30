import React from 'react';
import Head from 'next/head';

import Layout from '../components/Layout';
import IndexPage from '../components/index-page';
import GET from '../API/get';

const Index = ({ articles }) => {
  return (
    <Layout>
      <Head>
        <title>Siemabiz Forum</title>
      </Head>
      <IndexPage articles={articles} />
    </Layout>
  );
};

Index.getInitialProps = async ctx => {
  let articles = await GET('articles/shorts');
  articles = articles.slice(0, 5);

  return { articles };
};

export default Index;
