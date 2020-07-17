import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import { useSelector } from 'react-redux';

import get from '../API/get';
import JobOfferPage from '../components/job-offer-page';

const JobOffer = ({ jobOffer }) => {
  return (
    <Layout>
      <Head>
        <title>{jobOffer.title} - SiemaBiz Forum</title>
      </Head>
      <JobOfferPage offer={jobOffer} />
    </Layout>
  );
};

JobOffer.getInitialProps = async ctx => {
  const jobOffer = await get(`get-job-ad/${ctx.query.id}`);
  return { jobOffer };
};

export default JobOffer;
