import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import { Container } from './change-password__styles'
import ChangePasswordLogicLayer from './change-password__logic'
import Breadcrumbs from '../../UI/breadcrumbs'

const ChangePasswordPresentationLayer = ({ }) => {

  const language = useSelector( s => s.language.source );

  return(
    <Container id = 'change-password'>
      <Breadcrumbs
        generalCrumb = { language.userPanel.changePassword.title }
        breadcrumbs = {[ language.userPanel.title, language.userPanel.userSettings.title ]}
      />
    </Container>
  )
}

ChangePasswordLogicLayer.propTypes = {

}

export default ChangePasswordPresentationLayer