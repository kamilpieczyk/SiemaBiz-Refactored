import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import getMenu from '../../../../../data/globalMenu';

const MobileMenuLogicLayer = ({ render }) => {
  const isPageScrolled = useSelector(state => state.isPageScrolled);
  const menuItems = getMenu();
  const isUserLogged = useSelector(state => state.user.username);

  return render({
    isPageScrolled,
    menuItems,
    isUserLogged,
  });
};

MobileMenuLogicLayer.propTypes = {
  render: PropTypes.func.isRequired,
};

export default MobileMenuLogicLayer;
