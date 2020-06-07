import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import MaterialIcon from '@material/react-material-icon';

import {
  Container,
  Title,
  CompanyName,
  City,
  Description,
  ButtonContainer,
  Wages,
  Footer,
  DateContainer,
  Industry,
  NewTag,
} from './job-offer__styles';
import GET from '../../../../API/get';
import SmallButton from '../../../UI/small-button';
import withClick from '../../../HOC/withClick';
import Separator from '../../../UI/separator';

const Button = withClick(SmallButton);

const JobOffer = ({ id, title, companyID, city, wages, industry, description, date, buttonHandler }) => {
  const [companyName, setCompanyName] = useState('');
  const [isHover, setHover] = useState(false);

  const language = useSelector(s => s.language.source.jobOffersSite);

  const getCompany = async () => {
    const data = await GET(`get-company/${companyID}`);
    setCompanyName(data.company.name);
  };
  const newTagHandler = oldDate => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getUTCFullYear();
    const today = `${day}.${month}.${year}`;

    const lastMonthDate = new Date(date.getFullYear(), date.getMonth() - 1, 0);
    const lastMonthLastDay = lastMonthDate.getDate();
    const lastMonth = lastMonthDate.getMonth() + 1;

    let yesterday;
    if (day > 1) yesterday = `${day - 1}.${month}.${year}`;
    else yesterday = `${lastMonthLastDay}.${lastMonth}.${year}`;

    if (today === oldDate) return true;
    else if (yesterday === oldDate) return true;
    else return false;
  };

  useEffect(() => {
    getCompany();
  }, []);

  return (
    <Container onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      {newTagHandler(date) && (
        <NewTag>
          <MaterialIcon icon='new_releases' />
          {language.new}
        </NewTag>
      )}
      <Title>{title}</Title>
      <Link href={{ pathname: '/company', query: { id: companyID } }}>
        <CompanyName>{companyName}</CompanyName>
      </Link>
      <City href={`https://maps.google.com/?q=${city}`}>{city}</City>
      <Wages>{wages}</Wages>
      <Description isHover={isHover}>{description.slice(0, 350)}...</Description>
      <Footer>
        <Industry>{industry}</Industry>
        <DateContainer>{date}</DateContainer>
      </Footer>
      <ButtonContainer isHover={isHover}>
        <Button thin onClickFunction={() => buttonHandler(id)}>
          <MaterialIcon icon='visibility' />
          <Separator width='5px' />
          {language.seeOfferButton}
        </Button>
      </ButtonContainer>
    </Container>
  );
};

JobOffer.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  companyID: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  wages: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonHandler: PropTypes.func.isRequired,
};

export default JobOffer;
