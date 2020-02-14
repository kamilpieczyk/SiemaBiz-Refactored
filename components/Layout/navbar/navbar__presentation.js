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
import LoggedUserButton from './components/logged-user-button'
import UserMenu from './components/user-menu'


const LanguageSwitcher = withLanguageSwitch( Switcher )
const ClickableButton = withClick( Button )

const Presentation = ({ scroll, isMenuActive, isUserMenuActive, isUserLogged, languageSource, loginPopup, logout }) => (
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

        {
          // THIS SECTION IS VISIBLE ONLY FOR NON LOGGED IN USERS
          !isUserLogged && (
            <React.Fragment>
              <Button thin>{ languageSource.navbar.signUp }</Button>
              <ClickableButton 
                onClickFunction = { () => loginPopup.setLoginPopup( !loginPopup.isLoginPopup ) }
              >
                { languageSource.navbar.signIn }
              </ClickableButton>
            </React.Fragment>
          )
        }

        {
          // THIS SECTION IS VISIBLE ONLY FOR LOGGED USERS
          isUserLogged && (
            <React.Fragment>
              <LoggedUserButton />
              <ClickableButton
                onClickFunction = { logout }
              >{ languageSource.navbar.logout }</ClickableButton>
              { isUserMenuActive && <UserMenu /> }
            </React.Fragment>
          )
        }

        <LanguageSwitcher text = "PL" />

      </ButtonsContainer>

      { isMenuActive && <Menu /> }

    </Container>

    { loginPopup.isLoginPopup && !isUserLogged && <LoginPopup /> }
 
  </React.Fragment>
)

Presentation.propTypes = {
  scroll: PropTypes.bool.isRequired,
  isMenuActive: PropTypes.bool,
  languageSource: PropTypes.object.isRequired,
  loginPopup: PropTypes.object.isRequired,
  isUserLogged: PropTypes.string,
  logout: PropTypes.func.isRequired,
  isUserMenuActive: PropTypes.bool
}

export default Presentation