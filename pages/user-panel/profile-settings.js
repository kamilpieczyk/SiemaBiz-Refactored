import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import Layout from '../../components/Layout'
import UserPanel from '../../components/User-panel'
import ProfileSettingsComponent from '../../components/User-panel/profile-settings'

const ProfileSettings = () => {

  const languageSource = useSelector( s => s.language.source );

  return (
    <Layout>
      <Head>
        <title>
          { languageSource.userPanel.userSettings.title } - SiemaBiz Forum
        </title>
      </Head>

      <UserPanel menu = { languageSource.navbar.usermenu } >
        <ProfileSettingsComponent />
      </UserPanel>

    </Layout>
  )
}

export default ProfileSettings