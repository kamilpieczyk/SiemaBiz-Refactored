import React from 'react'
import PropTypes from 'prop-types'

import { Container, LogoContainer, ButtonsContainer } from './style'

import withLanguageSwitch from '../../HOC/withLanguageSwitch'
import Switcher from '../../UI/switcher'

const LanguageSwitcher = withLanguageSwitch( Switcher )

export default () => (
  <Container>

    <LogoContainer>
      <img src='/images/logo.png' />
    </LogoContainer>

    <ButtonsContainer>

      <LanguageSwitcher text = "PL" />

    </ButtonsContainer>

  </Container>
)