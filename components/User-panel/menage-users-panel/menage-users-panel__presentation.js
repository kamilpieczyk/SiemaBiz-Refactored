import React from 'react';
import { useSelector } from 'react-redux';

import { Container } from './menage-users-panel__styles';
import { SectionContainer } from '../user-panel__styles';
import Breadcrumbs from '../../UI/breadcrumbs';

const Presentation = ({}) => {
  return (
    <Container>
      <SectionContainer>
        <Breadcrumbs breadcrumbs={['admin panel']} generalCrumb='menage users' />
      </SectionContainer>
    </Container>
  );
};

Presentation.propTypes = {};
export default Presentation;
