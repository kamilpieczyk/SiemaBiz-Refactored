import PropTypes from 'prop-types';

export const render = PropTypes.func.isRequired;

export const buttonPosition = PropTypes.shape({
  x: PropTypes.number,
  y: PropTypes.number,
});

export const state = PropTypes.shape({
  buttonPosition,
});
