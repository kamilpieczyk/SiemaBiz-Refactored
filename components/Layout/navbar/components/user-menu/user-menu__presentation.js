import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import MaterialIcon from '@material/react-material-icon';

import { Container, Option } from './user-menu__styles';
import getMenu from '../../../../../data/userMenu';
import Link from '../../../../../API/link';
import { setUserMenuInactive } from '../../../../../Redux/actions';

const UserMenuPresentationLayer = ({ buttonPosition, isPageScrolled, languageSource }) => {
  const privileges = useSelector(s => s.user.privileges);
  const dispatch = useDispatch();

  return (
    <Container position={buttonPosition} isScrolled={isPageScrolled}>
      {getMenu().map(({ title, href, icon, priv }, index) => (
        <Option key={`${index}+${title}+${href}`} display={priv <= privileges}>
          <MaterialIcon icon={icon} />
          <Link adress={href} callback={() => dispatch(setUserMenuInactive())}>
            {title}
          </Link>
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
