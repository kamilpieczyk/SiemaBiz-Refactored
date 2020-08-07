import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import { Container, Option } from './mobile-menu__style';
import UserSignIn from './components/user-sign-in';
import LoggedUserContainer from './components/logged-user-container';
import UserMenu from './components/user-menu';
import { setMenuInactive } from '../../../../../Redux/actions';
import { useLink } from '../../../../../API/link';

const MobileMenuPresentationLayer = ({ isPageScrolled, menuItems, isUserLogged }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const link = useLink();

  const handleLink = href => {
    dispatch(setMenuInactive());
    window.scrollTo(0, 0);
    // router.push(href);
    link(href);
  };

  return (
    <Container isPageScrolled={isPageScrolled}>
      {
        // VISIBLE ONLY FOR LOGGED USER
        isUserLogged ? <LoggedUserContainer /> : <UserSignIn />
      }

      {
        // MENU STUFF
        menuItems.map((item, index) => (
          <Option key={index}>
            <a onClick={() => handleLink(item.href)}>{item.title}</a>
          </Option>
        ))
      }

      {
        // VISIBLE ONLY FOR LOGGED USER
        isUserLogged && <UserMenu />
      }
    </Container>
  );
};

MobileMenuPresentationLayer.propTypes = {
  isPageScrolled: PropTypes.bool,
  menuItems: PropTypes.array.isRequired,
  isUserLogged: PropTypes.string,
};

export default MobileMenuPresentationLayer;
