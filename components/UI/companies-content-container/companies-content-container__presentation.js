import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import MaterialIcon from '@material/react-material-icon';

import { Container, Sites, Site, CompaniesContainer, NoResults } from './companies-content-container__styles';
import CompanyBox from '../company-box';
import Separator from '../separator';
import Pagination from '../pagination';

const ArticleContentContainerPresentationLayer = ({ companies, numberOfSites, site }) => {
  const language = useSelector(s => s.language.source);

  return (
    <Container>
      <CompaniesContainer>
        {companies && companies.length === 0 && (
          <NoResults>
            <MaterialIcon icon='sentiment_very_dissatisfied' />
            <Separator height='10px' />
            {language.cathalogueSite.nothingToshow}
          </NoResults>
        )}
        {companies &&
          companies.map((company, index) => (
            <Fragment key={company.name + index}>
              <CompanyBox company={company} />
              <Separator height='10px' />
            </Fragment>
          ))}
        <Pagination numberOfSites={numberOfSites} />
      </CompaniesContainer>
    </Container>
  );
};

ArticleContentContainerPresentationLayer.propTypes = {};

export default ArticleContentContainerPresentationLayer;
