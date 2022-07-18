import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

const CompaniesContentContainerLogicLayer = ({ render, companies }) => {
  const router = useRouter();
  const site = router.query.site;
  const numberOfSites = Math.ceil(companies.length / 5);
  const elementsToShow = 5 * site;

  companies = companies.slice(elementsToShow - 5, elementsToShow);

  return render({
    companies,
    numberOfSites,
    site,
  });
};

CompaniesContentContainerLogicLayer.propTypes = {
  render: PropTypes.func.isRequired,
  companies: PropTypes.array.isRequired,
};

export default CompaniesContentContainerLogicLayer;
