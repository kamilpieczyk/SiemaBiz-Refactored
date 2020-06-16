import PropTypes from 'prop-types';

export const render = PropTypes.func.isRequired;

export const state = PropTypes.shape({
  isAddNewApoitmentWindowActive: PropTypes.bool,
  isApoitmentWindowLoading: PropTypes.bool,
  apoitments: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.date,
      available: PropTypes.bool,
      bookedBy: PropTypes.string,
      bookedAt: PropTypes.date,
      _id: PropTypes.string,
    })
  ),
}).isRequired;

export const handlers = PropTypes.shape({
  handleNewApoitmentWindowButton: PropTypes.func,
  handleAddNewApoitment: PropTypes.func,
}).isRequired;

export const callback = PropTypes.func.isRequired;

export const loading = PropTypes.bool;
