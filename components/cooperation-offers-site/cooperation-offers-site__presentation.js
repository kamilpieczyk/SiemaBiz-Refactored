import React from 'react';

import { Container, Content } from './cooperation-offers-site__styles';
import Sidebar from '../UI/sidebar-box';
import getIndustries from '../../data/industries';
import { offers, handlers } from './propTypes';
import Offer from './components/offer';

const Presentation = ({ offers, handlers }) => {
  return (
    <Container>
      <Content>
        {offers.map((offer, index) => (
          <Offer offer={offer} key={offer._id} company={handlers.getCompany} index={index} />
        ))}
      </Content>
      <Sidebar light menu={getIndustries(false, true)} />
    </Container>
  );
};

Presentation.propTypes = { offers, handlers };

export default Presentation;
