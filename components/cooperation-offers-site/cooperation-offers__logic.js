import PropTypes from 'prop-types';
import { useEffect } from 'react';

import { offers } from './propTypes';
import GET from '../../API/get';

const Logic = ({ render, offers }) => {
  return render({
    offers,
    handlers: {},
  });
};

Logic.propTypes = {
  render: PropTypes.func.isRequired,
  offers: offers,
};

export default Logic;
