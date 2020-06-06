import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { offers } from './propTypes';

const Logic = ({ render, offers }) => {
  const [sortedOffers, setSortedOffers] = useState(null);
  const [sortedOffersBySite, setSortedOffersBySite] = useState(null);

  const router = useRouter();

  const numberOfSites = sortedOffers ? Math.ceil(sortedOffers.length / 5) : Math.ceil(offers.length / 5);
  const site = router.query.site;
  const industry = router.query.industry;

  const sortOffers = () => {
    const newOffers = [...offers];
    const sortedOffers = [];
    if (industry) {
      newOffers.forEach(offer => {
        if (offer.industry === industry) sortedOffers.push(offer);
      });
      setSortedOffers(sortedOffers);
    } else setSortedOffers(offers);
  };

  const sortSites = () => {
    let newOffers = [...sortedOffers];
    if (site) {
      const lastItem = site * 5;
      const firstItem = lastItem - 5;
      newOffers = newOffers.slice(firstItem, lastItem);
      setSortedOffersBySite(newOffers);
    }
  };

  useEffect(() => {
    sortOffers();
  }, [site, industry]);

  useEffect(() => {
    sortedOffers && sortSites();
  }, [sortedOffers]);

  useEffect(() => {
    if (!router.query.site) router.push({ pathname: '/cooperation-offers', query: { site: 1 } });
  }, []);

  return render({
    offers: sortedOffersBySite ? sortedOffersBySite : offers,
    numberOfSites,
    handlers: {},
  });
};

Logic.propTypes = {
  render: PropTypes.func.isRequired,
  offers: offers,
};

export default Logic;
