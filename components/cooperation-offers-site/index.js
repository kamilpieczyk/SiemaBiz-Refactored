import React from 'react';

import Logic from './cooperation-offers__logic';
import PresentationLayer from './cooperation-offers-site__presentation';
import { offers } from './propTypes';

const CooperationOffersSite = props => <Logic {...props} render={props => <PresentationLayer {...props} />} />;

CooperationOffersSite.propTypes = {
  offers: offers,
};

export default CooperationOffersSite;
