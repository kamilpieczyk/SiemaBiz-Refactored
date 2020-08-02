import React, { useCallback } from 'react';

import { Container } from './latest-job-offers__styles';
import JobOffer from '../../../job-offers-site/components/job-offer';
import { useLink } from '../../../../API/link';

const LatestJobOffers = ({ jobOffers }) => {
  const link = useLink();

  const handleSeeOffer = useCallback(id => {
    link({ pathname: '/job-offer-page', query: { id } });
  }, []);

  return (
    <Container>
      {jobOffers.map(offer => (
        <JobOffer
          key={offer._id}
          id={offer._id}
          title={offer.title}
          companyID={offer.companyID}
          city={offer.city}
          wages={offer.wages}
          description={offer.description}
          buttonHandler={handleSeeOffer}
        />
      ))}
    </Container>
  );
};

export default LatestJobOffers;
