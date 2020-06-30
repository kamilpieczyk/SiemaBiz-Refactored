import React from 'react';
import { useSelector } from 'react-redux';

import { state, handlers } from './apointment-page__types';
import { Container, Content, SidebarContainer, NoResults } from './apointment-page__styles';
import Sidebar from '../UI/sidebar-box';
import Separator from '../UI/separator';
import industries from '../../data/industries';
import articles from '../../data/article-categories';
import Appointment from './appointment';

const PresentationLayer = ({ state, handlers }) => {
  const language = useSelector(s => s.language.source.appointmentsPage);
  return (
    <Container>
      <Content>
        {state.appointmentsList.length === 0 ? (
          <NoResults>{language.nothingToShow}</NoResults>
        ) : (
          state.appointmentsList.map(appointment => (
            <Appointment
              appointment={appointment}
              key={appointment._id}
              callback={handlers.handleBookAppointmentButton}
            />
          ))
        )}
      </Content>
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

PresentationLayer.propTypes = { state, handlers };
export default PresentationLayer;
