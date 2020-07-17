import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrownOpen } from '@fortawesome/free-solid-svg-icons';

import { Container } from './404__styles';
import Separator from '../UI/separator';

const Page404 = ({}) => {
  const language = useSelector(s => s.language.source.page404);
  return (
    <Container>
      <FontAwesomeIcon icon={faFrownOpen} size='3x' />
      <Separator height='20px' />
      <h1>404!</h1>
      <div>{language.text}</div>
      <p>{language.info}</p>
    </Container>
  );
};

export default Page404;
