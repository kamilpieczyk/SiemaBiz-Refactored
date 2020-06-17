import React from 'react';
import { useSelector } from 'react-redux';

import { Container, Content, SidebarContainer } from './apointment-page__styles';
import Sidebar from '../UI/sidebar-box';
import Separator from '../UI/separator';
import industries from '../../data/industries';
import articles from '../../data/article-categories';

const PresentationLayer = ({}) => {
  const language = useSelector(s => s.language.source.appointmentsPage);
  return (
    <Container>
      <Content></Content>
      <SidebarContainer>
        <h2>{language.sidebar.companiesCathalogue}</h2>
        <Sidebar light menu={industries()} />
        <Separator height='20px' />
        <h2>{language.sidebar.articles}</h2>
        <Sidebar light menu={articles()} />
      </SidebarContainer>
    </Container>
  );
};

PresentationLayer.propTypes = {};
export default PresentationLayer;
