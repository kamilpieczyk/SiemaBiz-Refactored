import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { Container, LogoContainer, ButtonsContainer } from './style';

import withLanguageSwitch from '../../HOC/withLanguageSwitch';
import { setRegistrationWindow } from '../../../Redux/actions';

import Switcher from '../../UI/switcher';
import MenuButton from './components/menu-button';
import Menu from './components/menu';
import Button from '../../UI/small-button';
import LoginPopup from './components/login-popup';
import withClick from '../../HOC/withClick';
import LoggedUserButton from './components/logged-user-button';
import UserMenu from './components/user-menu';
import MobileMenu from './components/mobile-menu';
import Separator from '../../UI/separator';
import RegisterWindow from './components/register';

const LanguageSwitcher = withLanguageSwitch(Switcher);
const ClickableButton = withClick(Button);

const Presentation = ({
  scroll,
  isMenuActive,
  isUserMenuActive,
  isUserLogged,
  languageSource,
  loginPopup,
  logout,
  deviceScreenResolution,
}) => {
  const dispatch = useDispatch();
  const isRegistrationWindowActive = useSelector(s => s.registerWindowActive);
  return (
    <React.Fragment>
      <Container id='globalMenu' scroll={scroll}>
        <LogoContainer scroll={scroll} device={deviceScreenResolution}>
          <img
            src={
              deviceScreenResolution === 'mobile'
                ? '/images/logo-mini.png'
                : scroll
                ? '/images/logo-mini.png'
                : '/images/logo.png'
            }
          />
        </LogoContainer>

        <ButtonsContainer>
          <MenuButton />

          {
            // THIS SECTION IS VISIBLE ONLY FOR NON LOGGED IN USERS
            !isUserLogged && (
              <React.Fragment>
                {deviceScreenResolution === 'desktop' && (
                  <>
                    <Separator width='10px' />
                    <ClickableButton
                      id='registerWindowButton'
                      thin
                      onClickFunction={() =>
                        dispatch(setRegistrationWindow({ isActive: !isRegistrationWindowActive }))
                      }
                    >
                      {languageSource.navbar.signUp}
                    </ClickableButton>
                  </>
                )}
                {deviceScreenResolution === 'desktop' && (
                  <>
                    <Separator width='20px' />
                    <ClickableButton
                      onClickFunction={() => loginPopup.setLoginPopup(!loginPopup.isLoginPopup)}
                    >
                      {languageSource.navbar.signIn}
                    </ClickableButton>
                  </>
                )}
              </React.Fragment>
            )
          }

          {
            // THIS SECTION IS VISIBLE ONLY FOR LOGGED USERS
            isUserLogged && (
              <React.Fragment>
                {deviceScreenResolution === 'desktop' && <LoggedUserButton />}
                {deviceScreenResolution === 'desktop' && (
                  <ClickableButton onClickFunction={logout}>{languageSource.navbar.logout}</ClickableButton>
                )}
                {isUserMenuActive && <UserMenu />}
              </React.Fragment>
            )
          }
          <Separator width='10px' />
          <LanguageSwitcher text='PL' />
        </ButtonsContainer>

        {
          // THIS SECTION SHOWS MENU IF IT'S ACTIVE
          isMenuActive && (deviceScreenResolution === 'mobile' ? <MobileMenu /> : <Menu />)
        }
      </Container>

      {loginPopup.isLoginPopup && !isUserLogged && (
        <LoginPopup close={() => loginPopup.setLoginPopup(false)} />
      )}
      {isRegistrationWindowActive && <RegisterWindow />}
    </React.Fragment>
  );
};

Presentation.propTypes = {
  scroll: PropTypes.bool.isRequired,
  isMenuActive: PropTypes.bool,
  languageSource: PropTypes.object.isRequired,
  loginPopup: PropTypes.object.isRequired,
  isUserLogged: PropTypes.string,
  logout: PropTypes.func.isRequired,
  isUserMenuActive: PropTypes.bool,
  deviceScreenResolution: PropTypes.string.isRequired,
};

export default Presentation;
