import React from 'react';
import PropTypes from 'prop-types';

import { SubmitButton } from './submit__styles';

const Submit = ({ value }) => <SubmitButton type='submit' value={value} />;

Submit.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Submit;
