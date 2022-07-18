import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Icon from '@material/react-material-icon';

import { Button } from './section-button__styles';

const SectionButton = ({ children, icon, onClick }) => {
  const device = useSelector(s => s.deviceScreen);

  return (
    <Button onClick={onClick}>
      <Icon icon={icon} />
      {device !== 'mobile' && children}
    </Button>
  );
};

SectionButton.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SectionButton;
