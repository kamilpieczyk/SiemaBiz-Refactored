import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './separator__styles';

const Separator = ({ width, height }) => <Container width={width} height={height} />;

Separator.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

export default Separator;
