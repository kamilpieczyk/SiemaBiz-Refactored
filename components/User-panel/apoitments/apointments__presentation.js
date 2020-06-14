import React from 'react';
import { useSelector } from 'react-redux';

import { Container } from './apoitments__styles';
import {} from './apoitments__types';
import { SectionContainer } from '../user-panel__styles';
import Breadcrumbs from '../../UI/breadcrumbs';

const Presentation = ({}) => {
  const language = useSelector(s => s.language.source.apoitmentsPanel);

  return (
    <Container>
      <SectionContainer>
        <Breadcrumbs generalCrumb={language.title} breadcrumbs={['admin panel']} />
      </SectionContainer>
    </Container>
  );
};

Presentation.propTypes = {};
export default Presentation;
