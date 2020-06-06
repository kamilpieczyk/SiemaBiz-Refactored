import React from 'react';
import { useSelector } from 'react-redux';

import { offers, handlers, numberOfSites } from './propTypes';
import { Container, Content, NothingToShow } from './cooperation-offers-site__styles';
import Sidebar from '../UI/sidebar-box';
import getIndustries from '../../data/industries';
import Offer from './components/offer';
import Pagination from '../UI/pagination';

const Presentation = ({ offers, numberOfSites, handlers }) => {
  const language = useSelector(s => s.language.source.cooperationOffersPage);
  return (
    <Container>
      <Content>
        {offers.length === 0 && <NothingToShow>{language.nothingToShow}</NothingToShow>}
        {offers.map((offer, index) => (
          <Offer offer={offer} key={offer._id} company={handlers.getCompany} index={index} />
        ))}
        <Pagination numberOfSites={numberOfSites} />
      </Content>
      <Sidebar light menu={getIndustries(false, true, true)} />
    </Container>
  );
};

Presentation.propTypes = { offers, handlers, numberOfSites };

export default Presentation;
