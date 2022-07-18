import React from 'react';
import PropTypes, { array } from 'prop-types';

import Logic from './job-offers-site__logic';
import Presentation from './job-offers-site__presentation';

const JobOffersSite = props => <Logic {...props} render={nextProps => <Presentation {...nextProps} />} />;

JobOffersSite.propTypes = {
  jobOffers: PropTypes.array.isRequired,
};

export default JobOffersSite;
