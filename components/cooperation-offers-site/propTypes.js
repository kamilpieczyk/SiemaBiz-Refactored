import PropTypes from 'prop-types';

export const offer = PropTypes.shape({
  _id: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  company: PropTypes.string,
  city: PropTypes.string,
  date: PropTypes.string,
}).isRequired;

export const offers = PropTypes.arrayOf(offer);

export const handleCitySearch = PropTypes.func.isRequired;

export const handlers = PropTypes.shape({
  handleCitySearch,
});

export const numberOfSites = PropTypes.number.isRequired;
