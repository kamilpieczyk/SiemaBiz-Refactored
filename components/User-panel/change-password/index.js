import React from 'react';
import PropTypes from 'prop-types';

import LogicLayer from './change-password__logic';
import PresentationLayer from './change-password__presentation-layer';

const ChangePassword = props => <LogicLayer {...props} render={props => <PresentationLayer {...props} />} />;

export default ChangePassword;
