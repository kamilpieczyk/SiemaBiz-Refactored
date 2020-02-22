import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import Icon from '@material/react-material-icon'

import { Container, Username } from './profile-settings__styles'
import Breadcrumbs from '../../UI/breadcrumbs'
import Separator from '../../UI/separator'

const ProfileSettingsPresentationLayer = ({ breadcrumbs }) => {

  const language = useSelector( s => s.language.source );
  const user = useSelector( s => s.user );

  return(
    <Container>
      <Breadcrumbs
        generalCrumb = { language.userPanel.userSettings.title }
        breadcrumbs = { breadcrumbs }
      />
      <Separator height = '20px' />
      <Username>
        <Icon icon = 'perm_identity' />
        <Separator width = '10px' />
        <p>{ user.username }</p>
      </Username>
    </Container>
  )
}

ProfileSettingsPresentationLayer.propTypes = {
  breadcrumbs: PropTypes.array.isRequired,

}

export default ProfileSettingsPresentationLayer