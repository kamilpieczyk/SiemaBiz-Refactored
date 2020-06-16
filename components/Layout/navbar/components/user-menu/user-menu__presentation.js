import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import MaterialIcon from '@material/react-material-icon';

import { Container, Option } from './user-menu__styles';
import getMenu from '../../../../../data/userMenu';

const UserMenuPresentationLayer = ({ buttonPosition, isPageScrolled, languageSource }) => {
  const privileges = useSelector(s => s.user.privileges);

  return (
    <Container position={buttonPosition} isScrolled={isPageScrolled}>
      {getMenu().map(({ title, href, icon, priv }) => (
        <Option key={title} display={priv <= privileges}>
          <MaterialIcon icon={icon} />
          <a href={href}>{title}</a>
        </Option>
      ))}
    </Container>
  );
};

UserMenuPresentationLayer.propTypes = {
  buttonPosition: PropTypes.number,
  isPageScrolled: PropTypes.bool,
  languageSource: PropTypes.object,
};

export default UserMenuPresentationLayer;
