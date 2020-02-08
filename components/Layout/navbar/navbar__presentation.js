import React from 'react'
import PropTypes from 'prop-types'

import { Container, LogoContainer, ButtonsContainer } from './style'

import withLanguageSwitch from '../../HOC/withLanguageSwitch'

import Switcher from '../../UI/switcher'
import MenuButton from './components/menu-button'
import Menu from './components/menu'
import Button from '../../UI/small-button'
import LoginPopup from './components/login-popup'
import withClick from '../../HOC/withClick'


const LanguageSwitcher = withLanguageSwitch( Switcher )
const ClickableButton = withClick( Button )

const Presentation = ({ scroll, isMenuActive, languageSource, loginPopup }) => (
  <React.Fragment>
    <Container scroll = { scroll }>

      <LogoContainer scroll = { scroll }>
        <img src = {
          scroll
            ? '/images/logo-mini.png'
            : '/images/logo.png'
        } />
      </LogoContainer>

      <ButtonsContainer>
        
        <MenuButton />
        <Button thin>{ languageSource.navbar.signUp }</Button>
        <ClickableButton 
          onClickFunction = { () => loginPopup.setLoginPopup( !loginPopup.isLoginPopup ) }
        >
          { languageSource.navbar.signIn }
        </ClickableButton>
        <LanguageSwitcher text = "PL" />

      </ButtonsContainer>

      { isMenuActive && <Menu /> }

    </Container>

    { loginPopup.isLoginPopup && <LoginPopup /> }
 
  </React.Fragment>
)

Presentation.propTypes = {
  scroll: PropTypes.bool.isRequired,
  isMenuActive: PropTypes.bool,
  languageSource: PropTypes.object.isRequired,
  loginPopup: PropTypes.object.isRequired
}

export default Presentation