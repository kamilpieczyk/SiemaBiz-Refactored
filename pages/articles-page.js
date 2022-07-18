import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';

import get from '../API/get';

import ArticlesPage from '../components/articles';

const Articles = ({ articles }) => {
  return (
    <Layout>
      <Head>
        <title>SiemaBiz Forum</title>
      </Head>
      <ArticlesPage articles={articles} />
    </Layout>
  );
};

Articles.getInitialProps = async ctx => {
  const articles = await get('articles/shorts');
  return { articles: articles.reverse() };
};

export default Articles;
