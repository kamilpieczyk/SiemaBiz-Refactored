import React from 'react';

import { state } from './register__types';
import { Container } from './register__styles';

const Presentation = ({ state }) => {
  const x = document.getElementById('registerWindowButton').offsetLeft;
  const y = document.getElementById('globalMenu').offsetHeight + 25;

  return <Container position={{ x, y }}></Container>;
};

Presentation.propTypes = { state };
export default Presentation;
