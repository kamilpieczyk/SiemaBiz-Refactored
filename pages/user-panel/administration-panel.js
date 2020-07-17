import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { useSelector } from 'react-redux';

import Layout from '../../components/Layout';
import UserPanel from '../../components/User-panel';
import Articles from '../../components/User-panel/articles';
import Company from '../../components/User-panel/company-managment';
import Apoitments from '../../components/User-panel/apoitments';
import ManageUsers from '../../components/User-panel/menage-users-panel';
import get from '../../API/get';
import adminMenu from '../../data/admin-panel-menu';

const AdminPanel = ({ articles }) => {
  const languageSource = useSelector(s => s.language.source);
  const privileges = useSelector(s => s.user.privileges);
  const router = useRouter();

  return (
    <Layout>
      <Head>
        <title>adimn panel - SiemaBiz Forum</title>
      </Head>

      <UserPanel menu={adminMenu}>
        {router.query.page === 'articles' && <Articles articles={articles} />}
        {router.query.page === 'company' && <Company />}
        {router.query.page === 'apoitments' && <Apoitments />}
        {router.query.page === 'admin' && <ManageUsers />}
      </UserPanel>
    </Layout>
  );
};

AdminPanel.getInitialProps = async ctx => {
  const articles = await get('articles/shorts');

  return {
    articles,
  };
};

export default AdminPanel;
