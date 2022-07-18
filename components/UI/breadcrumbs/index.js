import React from 'react';
import PropTypes from 'prop-types';

import { Container, PreTitle, Title } from './breadcrumbs__styles';

const Breadcrumbs = ({ breadcrumbs, generalCrumb }) => (
  <Container>
    {breadcrumbs.map((breadcrumb, index) => (
      <PreTitle key={index}>{breadcrumb} &nbsp;/&nbsp;</PreTitle>
    ))}
    <Title>{generalCrumb}</Title>
  </Container>
);

Breadcrumbs.propTypes = {
  breadcrumbs: PropTypes.array.isRequired,
  generalCrumb: PropTypes.string.isRequired,
};

export default Breadcrumbs;
