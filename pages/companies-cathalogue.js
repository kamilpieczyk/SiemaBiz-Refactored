import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import Layout from '../components/Layout'
import SearchBox from '../components/index-page/components/search-box'
import CathalogueSite from '../components/cathalogue-site'

import get from '../API/get'

const Articles = ({ searchResults, allCompanies, companiesByIndustry, industryQuery }) => {

  const router = useRouter();
  
  return(
    <Layout>
      <Head><title>SiemaBiz Forum</title></Head>
      <SearchBox small />
      <CathalogueSite
        searchResults = { searchResults.companies }
        companies = {
          companiesByIndustry.companies.length > 0
            ? companiesByIndustry.companies
            : industryQuery
              ? []
              : allCompanies.companies
        }
      />
    </Layout>
  )
}

Articles.getInitialProps = async ctx =>{
  const query = ctx.query.search;
  const searchResults = await get( `search-for-companies/${ query }` );
  const allCompanies = await get( 'get-companies' );
  const industryQuery = ctx.query.industry;
  const companiesByIndustry = await get( `get-companies-by-industry/${ industryQuery }` );

  return {
    searchResults,
    allCompanies,
    companiesByIndustry,
    industryQuery
  }
}

export default Articles