import PropTypes from 'prop-types';

export const render = PropTypes.func.isRequired;
export const handleSendEmail = PropTypes.func.isRequired;
export const isLoading = PropTypes.bool;

export const teamMember = PropTypes.shape({
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
});

export const contactInput = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export const contactInputs = PropTypes.arrayOf(contactInput);

export const team = PropTypes.arrayOf(teamMember);
