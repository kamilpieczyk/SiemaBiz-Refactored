import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { useRouter } from 'next/router';
import MaterialIcon from '@material/react-material-icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

import { Container, Column, Line, Signature, Separator } from './footer_styles';
import getGlobalMenu from '../../../data/globalMenu';
import GET from '../../../API/get';

const Footer = () => {
  const [companies, setCompanies] = useState([]);
  const [jobOffers, setJobOffers] = useState([]);

  const globalMenu = getGlobalMenu();
  const language = useSelector(s => s.language.source.footer);
  const articles = useSelector(s => s.articles.data)
    .reverse()
    .slice(0, 5);

  const getCompanies = async () => {
    let companies = await GET('get-companies');
    companies = companies.companies;
    companies = companies.reverse();
    companies = companies.slice(0, 5);
    setCompanies(companies);
  };
  const getJobOffers = async () => {
    let offers = await GET('get-job-ads/all');
    offers = offers.ads;
    offers = offers.reverse();
    offers = offers.slice(0, 5);
    setJobOffers(offers);
  };

  useEffect(() => {
    getCompanies();
    getJobOffers();
  }, []);

  return (
    <Container>
      <Line />
      <Column>
        <h1>
          <MaterialIcon icon='explore' />
          {language.sitemap}
        </h1>
        {globalMenu.map((item, index) => (
          <Link href={item.href} key={index}>
            <a title={item.title}>{item.title}</a>
          </Link>
        ))}
      </Column>
      <Column>
        <h1>
          <MaterialIcon icon='subject' />
          {language.latestArticles}
        </h1>
        {articles.map(article => (
          <Link href={`/article?id=${article._id}`} key={article._id}>
            <a title={article._id}>{article.title}</a>
          </Link>
        ))}
      </Column>
      <Column>
        <h1>
          <MaterialIcon icon='business_center' />
          {language.latestCompanies}
        </h1>
        {companies?.map(company => (
          <Link key={company._id} href={`/company?id=${company._id}`}>
            <a>{company.name}</a>
          </Link>
        ))}
      </Column>
      <Column>
        <h1>
          <MaterialIcon icon='work_outline' />
          {language.lateststJobOffers}
        </h1>
        {jobOffers?.map(offer => (
          <Link key={offer._id} href={`/job-offer-page?id=${offer._id}`}>
            <a>{offer.title}</a>
          </Link>
        ))}
      </Column>
      <Separator />
      <Column>
        <img src='/images/logo.png' />
      </Column>
      <Column>
        <h1>SiemaBiz Forum</h1>
        <p>11-13 Rhosddu Rd</p>
        <p>Wrexham LL11 1AT</p>
        <p>
          a part of <a href='https://businesswales.gov.wales/'>business wales</a>,
        </p>
        <p>{language.funded}</p>
      </Column>
      <Column>
        <h1>{language.social}</h1>
        <a href='https://www.facebook.com/SiemaBizForum'>
          <FontAwesomeIcon icon={faFacebook} size='2x' />
        </a>
      </Column>
      <Signature>
        <MaterialIcon icon='copyright' />
        siemabiz-forum 2019-2020 created by <a href='https://kamilpieczyk.github.io/'>Kamil Pieczyk</a> all
        rights reserved
      </Signature>
    </Container>
  );
};

export default Footer;
