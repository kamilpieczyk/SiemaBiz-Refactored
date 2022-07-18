import { useState } from 'react';
import PropTypes from 'prop-types';
import SearchCompanyWindow__presentation from './search-company-window__presentation';

const SearchCompanyWindow__logic = ({ render }) => {
  return render({});
};

SearchCompanyWindow__presentation.propTypes = {
  render: PropTypes.func.isRequired,
};

export default SearchCompanyWindow__logic;
