import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Container } from './title__styles';

const Title = ({ children, icon }) => (
  <Container>
    <FontAwesomeIcon icon={icon} />
    <h1>{children}</h1>
  </Container>
);

export default Title;
