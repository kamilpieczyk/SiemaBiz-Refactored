import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import Layout from '../../components/Layout'

const ProfileSettings = () => {

  const languageSource = useSelector( s => s.language.source );

  return (
    <Layout>
      <Head>
        <title>
          { languageSource.userPanel.userSettings.title } - SiemaBiz Forum
        </title>
      </Head>

    </Layout>
  )
}

export default ProfileSettings