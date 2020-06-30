import React from 'react';
import Head from 'next/head';

import Layout from '../components/Layout';
import ApoitmentPage from '../components/apointment-page';

const Appointment = () => (
  <Layout>
    <Head>
      <title>Make appointment - SiemaBiz Forum</title>
    </Head>
    <ApoitmentPage />
  </Layout>
);

export default Appointment;
