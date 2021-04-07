import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

import ArticleComponent from '../components/article';

import post from '../API/post';
import get from '../API/get';

const Article = ({ ssr_article }) => {
  return (
    <Layout>
      <Head>
        <title>SiemaBiz Forum</title>
      </Head>
      <ArticleComponent ssr_article={ssr_article} />
    </Layout>
  );
};

Article.getInitialProps = async ctx => {
  const id = ctx.query.id;
  const data = await get(`article/${id}`);
  const { article } = data;
  return { ssr_article: article };
};

export default Article;
