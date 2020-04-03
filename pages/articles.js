import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'

import get from '../API/get'

import ArticlesPage from '../components/articles'

const Articles = ({ articles }) => {

  const [ clientArticles, setClientArticles ] = useState( null );
  const router = useRouter();

  const getClientArticles = async () => {
    const artics = await get( 'articles/shorts' );
    setClientArticles( artics );
  }

  useEffect( () => {
    getClientArticles();
  }, [] );
  
  return(
    <Layout>
      <Head><title>SiemaBiz Forum</title></Head>
      <ArticlesPage articles = { articles ? articles : clientArticles } />
    </Layout>
  )
}

Articles.getInitialProps = async ctx =>{
  const id = ctx.query.id;
  const articles = await get( 'articles/shorts' );
  return { articles: articles.reverse() }
}

export default Articles