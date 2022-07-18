import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import router from 'next/router';
import PropTypes from 'prop-types';

const UserPanelLogicLayer = ({ render, menu }) => {
  const device = useSelector(s => s.deviceScreen);
  const isScrolled = useSelector(s => s.isPageScrolled);

  const redirectToHomepageIfUserIsNotLogged = () => {
    const isUserLogged = window.localStorage.getItem('token');
    if (!isUserLogged) {
      router.push('/');
    }
  };

  useEffect(() => {
    redirectToHomepageIfUserIsNotLogged();
  }, []);

  return render({
    device,
    menu,
    isScrolled,
  });
};

UserPanelLogicLayer.propTypes = {
  render: PropTypes.func.isRequired,
  menu: PropTypes.array.isRequired,
};

export default UserPanelLogicLayer;
