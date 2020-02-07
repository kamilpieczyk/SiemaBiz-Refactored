import React from 'react'
import PropTypes from 'prop-types'

import { Container, LogoContainer, ButtonsContainer } from './style'

import withLanguageSwitch from '../../HOC/withLanguageSwitch'
import Switcher from '../../UI/switcher'
import MenuButton from './components/menu-button'
import Menu from './components/menu'

const LanguageSwitcher = withLanguageSwitch( Switcher )

const Presentation = ({ scroll, isMenuActive }) => (

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
      <LanguageSwitcher text = "PL" />

    </ButtonsContainer>

    { isMenuActive && <Menu /> }

  </Container>
)

Presentation.propTypes = {
  scroll: PropTypes.number.isRequired,
  isMenuActive: PropTypes.bool
}

export default Presentation