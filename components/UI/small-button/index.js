import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './small-button__styles';

const SmallButton = ({ thin, maxWidth, children, smallHeight, click, id }) => {
  if (!click) click = () => {};
  return (
    <Button id={id} thin={thin} maxWidth={maxWidth} smallHeight={smallHeight} onClick={click}>
      {children}
    </Button>
  );
};

SmallButton.propTypes = {
  thin: PropTypes.bool,
  maxWidth: PropTypes.bool,
  smallHeight: PropTypes.bool,
  click: PropTypes.func,
};

export default SmallButton;
