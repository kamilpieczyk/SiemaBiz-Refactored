import React from 'react';
import PropTypes from 'prop-types';

import LogicLayer from './profile-settings__logic';
import PresentationLayer from './profile-settings__presentation';

const ProfileSettings = ({}) => <LogicLayer render={props => <PresentationLayer {...props} />} />;

ProfileSettings.propTypes = {};

export default ProfileSettings;
