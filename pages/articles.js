import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'

import get from '../API/get'

import ArticlesPage from '../components/articles'

const Articles = ({ articles }) => {
  
  return(
    <Layout>
      <Head><title>SiemaBiz Forum</title></Head>
      <ArticlesPage articles = { articles } />
    </Layout>
  )
}

Articles.getInitialProps = async ctx =>{
  const id = ctx.query.id;
  const articles = await get( 'articles/shorts' );
  return { articles: articles.reverse() }
}

export default Articles