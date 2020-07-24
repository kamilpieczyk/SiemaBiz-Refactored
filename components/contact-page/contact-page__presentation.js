import React from 'react';
import { useSelector } from 'react-redux';

import { Container, OurTeam } from './contact-page__styles';
import Map from './components/map';
import { team } from './@types';
import TeamMember from './components/team-member';

const Presentation = ({ team }) => {
  const language = useSelector(s => s.language.source.contactPage);
  return (
    <Container>
      <Map />
      <OurTeam>
        <h1>{language.team}</h1>
        {team.map((member, index) => (
          <TeamMember key={index} teamMember={member} />
        ))}
      </OurTeam>
    </Container>
  );
};

Presentation.propTypes = { team };
export default Presentation;
