import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'

import CompanySite from '../components/company-site'
import GET from '../API/get'

const Company = ({ company }) => {
  
  return(
    <Layout>
      <Head><title>{ company.name } - SiemaBiz Forum</title></Head>
      <CompanySite company = { company } />
    </Layout>
  )
}

Company.getInitialProps = async ctx =>{
  const id = ctx.query.id;
  const data = await GET( `get-company/${ id }` );

  return { company: data.company }
}

export default Company;