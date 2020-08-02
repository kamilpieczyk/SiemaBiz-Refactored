import React from 'react';

import { Container } from './new-companies__styles';
import Company from './company';

const NewCompanies = ({ companies }) => {
  return (
    <Container>
      {companies?.map(company => (
        <Company key={company._id} company={company} />
      ))}
    </Container>
  );
};

export default NewCompanies;
