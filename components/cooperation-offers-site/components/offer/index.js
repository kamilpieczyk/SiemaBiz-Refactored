import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import MaterialIcon from '@material/react-material-icon';
import Link from 'next/link';

import { offer } from '../../propTypes';
import { Container, Title, CompanyName, City, Description, Date, Industry } from './offer__styles';
import GET from '../../../../API/get';
import Button from '../../../UI/small-button';

const Offer = ({ offer, index }) => {
  const [companyName, setCompanyName] = useState('');
  const [isActive, setActive] = useState(false);

  const getCompanyName = async () => {
    const company = await GET(`get-company/${offer.company}`);
    if (company) setCompanyName(company.company.name);
  };

  const content = offer.content.split(' ').slice(0, 50);
  const language = useSelector(s => s.language.source.cooperationOffersPage);

  useEffect(() => {
    getCompanyName();
  }, []);

  return (
    <Container>
      <Title>{offer.title}</Title>
      <Date>{offer.date}</Date>
      <Link href={`/company?id=${offer.company}`}>
        <CompanyName>{companyName}</CompanyName>
      </Link>
      <City href={`https://maps.google.com/?q=${offer.city}`}>{offer.city}</City>
      <Industry>{offer.industry}</Industry>
      <Description>{isActive ? offer.content : content.join(' ')}</Description>
      {content.length >= 50 && (
        <Button smallHeight click={() => setActive(!isActive)}>
          {isActive ? <MaterialIcon icon='keyboard_arrow_up' /> : <MaterialIcon icon='keyboard_arrow_down' />}
          {isActive ? language.fold : language.expand}
        </Button>
      )}
    </Container>
  );
};

Offer.propTypes = {
  offer,
};

export default Offer;
