import PropTypes from 'prop-types';

export const render = PropTypes.func.isRequired;
export const handleBookAppointmentButton = PropTypes.func.isRequired;

export const appointment = PropTypes.shape({
  available: PropTypes.bool,
  bookedAt: PropTypes.date,
  bookedBy: PropTypes.string,
  date: PropTypes.date,
  _id: PropTypes.string,
});

export const state = PropTypes.shape({
  appointmentsList: PropTypes.arrayOf(appointment),
});

export const handlers = PropTypes.shape({
  handleBookAppointmentButton,
});
