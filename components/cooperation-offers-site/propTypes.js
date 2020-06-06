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

export const handlers = PropTypes.shape({});

export const numberOfSites = PropTypes.number.isRequired;
