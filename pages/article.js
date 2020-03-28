import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import Layout from '../components/Layout'

import ArticleComponent from '../components/article'

import post from '../API/post'

const Article = ({ article }) => {
  
  return(
    <Layout>
      <Head><title>SiemaBiz Forum</title></Head>
      <ArticleComponent article = { article } />
    </Layout>
  )
}

Article.getInitialProps = async ctx =>{
  const id = ctx.query.id;
  const data = await post( 'get-article', { id } );
  const { article } = data;
  return { article }
}

export default Article