import PropTypes from 'prop-types';

export const render = PropTypes.func.isRequired;
export const inputsHandler = PropTypes.func.isRequired;

export const buttonPosition = PropTypes.shape({
  x: PropTypes.number,
  y: PropTypes.number,
});

export const input = PropTypes.shape({
  name: PropTypes.string,
  icon: PropTypes.any,
  type: PropTypes.string,
  label: PropTypes.string,
});

export const state = PropTypes.shape({
  buttonPosition,
  isLoading: PropTypes.bool,
  error: PropTypes.shape({
    isError: PropTypes.bool,
    errorName: PropTypes.string,
    errorTitle: PropTypes.string,
  }),
});

export const handlers = PropTypes.shape({
  inputsHandler,
  handleSendButton: PropTypes.func,
});

export const inputs = PropTypes.arrayOf(input);
