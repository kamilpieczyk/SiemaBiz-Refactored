import PropTypes from 'prop-types';

export const render = PropTypes.func.isRequired;

export const teamMember = PropTypes.shape({
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
});

export const team = PropTypes.arrayOf(teamMember);
