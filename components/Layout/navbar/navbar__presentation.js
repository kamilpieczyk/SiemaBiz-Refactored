import React from 'react'
import PropTypes from 'prop-types'

import { Container, LogoContainer, ButtonsContainer } from './style'

import withLanguageSwitch from '../../HOC/withLanguageSwitch'

import Switcher from '../../UI/switcher'
import MenuButton from './components/menu-button'
import Menu from './components/menu'
import Button from '../../UI/small-button'

const LanguageSwitcher = withLanguageSwitch( Switcher )

const Presentation = ({ scroll, isMenuActive, languageSource }) => (

  <Container scroll = { scroll }>

    <LogoContainer scroll = { scroll }>
      <img src = {
        scroll > 150
          ? '/images/logo-mini.png'
          : '/images/logo.png'
      } />
    </LogoContainer>

    <ButtonsContainer>
      
      <MenuButton />
      <Button thin>{ languageSource.navbarSignUp }</Button>
      <Button>{ languageSource.navbarSignIn }</Button>
      <LanguageSwitcher text = "PL" />

    </ButtonsContainer>

    { isMenuActive && <Menu /> }

  </Container>
)

Presentation.propTypes = {
  scroll: PropTypes.number.isRequired,
  isMenuActive: PropTypes.bool,
  languageSource: PropTypes.object.isRequired
}

export default Presentation