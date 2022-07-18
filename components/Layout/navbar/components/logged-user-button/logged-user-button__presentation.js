import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@material/react-material-icon';

import { Button } from './logged-user-button__styles';

const LoggedUserButtonPresentationLayer = ({ username, handleClickButton }) => (
  <React.Fragment>
    <Button id='logged-user-button' onClick={handleClickButton}>
      <Icon icon='person' />
      {username}
    </Button>
  </React.Fragment>
);

LoggedUserButtonPresentationLayer.propTypes = {
  username: PropTypes.string.isRequired,
};

export default LoggedUserButtonPresentationLayer;
