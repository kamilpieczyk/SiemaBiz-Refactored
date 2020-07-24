import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

import GET from '../API/get';
import ContactPage from '../components/contact-page';

const Company = ({ team }) => {
  return (
    <Layout>
      <Head>
        <title>Contact - SiemaBiz Forum</title>
      </Head>
      <ContactPage team={team} />
    </Layout>
  );
};

Company.getInitialProps = async ctx => {
  const team = [
    {
      name: 'Clive',
      surname: 'Barnard',
      role: 'manager',
      email: 'clive@email.adress.co.uk',
      img: 'clive.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      name: 'Monika',
      surname: 'Frąckowiak',
      role: 'manager',
      email: 'clive@email.adress.co.uk',
      img: 'monika.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ];
  return { team };
};

export default Company;
