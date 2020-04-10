import React from 'react'
import Head from 'next/head'

import Layout from '../components/Layout'
import SearchBox from '../components/index-page/components/search-box'

import get from '../API/get'

const Articles = ({ searchResults }) => {
  
  return(
    <Layout>
      <Head><title>SiemaBiz Forum</title></Head>
      {
        searchResults.companies.length === 0
          ? <SearchBox />
          : <SearchBox small />
      }
    </Layout>
  )
}

Articles.getInitialProps = async ctx =>{
  const query = ctx.query.search;
  const searchResults = await get( `search-for-companies/${ query }` );
  return { searchResults }
}

export default Articles