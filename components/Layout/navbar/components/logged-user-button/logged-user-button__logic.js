import { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { setUserMenuActive, setUserMenuInactive } from '../../../../../Redux/actions';

const LoggedUserButtonLogic = ({ render }) => {
  const username = useSelector(state => state.user.username);
  const isUserMenuActive = useSelector(state => state.isUserMenuActiv);

  const dispatch = useDispatch();

  const handleClickButton = () => {
    if (isUserMenuActive) dispatch(setUserMenuInactive());
    else dispatch(setUserMenuActive());
  };

  return render({
    username,
    handleClickButton,
  });
};

LoggedUserButtonLogic.propTypes = {
  render: PropTypes.func.isRequired,
};

export default LoggedUserButtonLogic;
