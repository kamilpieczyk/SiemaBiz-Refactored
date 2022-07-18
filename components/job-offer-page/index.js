import React from 'react';
import PropTypes from 'prop-types';

import Logic from './job-offer-page__logic';
import Presentation from './job-offer-page__presentation';

const JobOfferPage = ({ offer }) => <Logic offer={offer} render={props => <Presentation {...props} />} />;

JobOfferPage.propTypes = {
  offer: PropTypes.object.isRequired,
};

export default JobOfferPage;
