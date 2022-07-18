import React from 'react';
import PropTypes from 'prop-types';

import LogicLayer from './cv-window__logic';
import PresentationLayer from './cv-window__presentation';

const CvWindow = ({ close, applications }) => (
  <LogicLayer
    applications={applications}
    close={close}
    render={props => <PresentationLayer {...props} close={close} />}
  />
);

CvWindow.propTypes = {
  close: PropTypes.func.isRequired,
  applications: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CvWindow;
