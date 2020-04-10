import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import Layout from '../components/Layout'
import SearchBox from '../components/index-page/components/search-box'
import CathalogueSite from '../components/cathalogue-site'

import get from '../API/get'

const Articles = ({ searchResults }) => {

  const router = useRouter();

  return(
    <Layout>
      <Head><title>SiemaBiz Forum</title></Head>
      {
        router.query.search
          ? <SearchBox small />
          : <SearchBox />
      }
      <CathalogueSite searchResults = { searchResults.companies }/>
    </Layout>
  )
}

Articles.getInitialProps = async ctx =>{
  const query = ctx.query.search;
  const searchResults = await get( `search-for-companies/${ query }` );
  return { searchResults }
}

export default Articles