import React from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

import { Container, Option } from './user-menu__styles';
import userMenu from '../../../../../../../data/userMenu';
import { setMenuInactive } from '../../../../../../../Redux/actions';

const UserMenuPresentationLayer = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleLink = href => {
    dispatch(setMenuInactive());
    window.scrollTo(0, 0);
    router.push(href);
  };
  return (
    <Container>
      {userMenu().map((item, index) => (
        <Option key={index}>
          <a onClick={() => handleLink(item.href)}>{item.title}</a>
        </Option>
      ))}
    </Container>
  );
};

UserMenuPresentationLayer.propTypes = {
  userMenu: PropTypes.array.isRequired,
};

export default UserMenuPresentationLayer;
