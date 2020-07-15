import PropTypes from 'prop-types';

export const render = PropTypes.func.isRequired;

export const handleDeleteUserButton = PropTypes.func;

export const user = PropTypes.shape({
  email: PropTypes.string,
  emailApproved: PropTypes.bool,
  name: PropTypes.string,
  phone: PropTypes.string,
  privilege: PropTypes.string,
  pwd: PropTypes.string,
  surname: PropTypes.string,
  username: PropTypes.string,
});

export const state = PropTypes.shape({
  users: PropTypes.arrayOf(user),
  loading: PropTypes.bool,
});

export const handlers = PropTypes.shape({
  handleDeleteUserButton,
});
