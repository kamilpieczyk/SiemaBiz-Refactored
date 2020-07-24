import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faAt } from '@fortawesome/free-solid-svg-icons';

import {
  Container,
  ContentContainer,
  Photo,
  Name,
  IconContent,
  Content,
  Description,
} from './team-member__styles';
import { teamMember } from '../../@types';

const TeamMember = ({ teamMember }) => {
  const language = useSelector(s => s.language.source.contactPage);
  const currentLanguage = useSelector(s => s.language.current);
  return (
    <Container>
      <ContentContainer>
        <Photo>
          <img src={`/images/${teamMember.img}`} />
        </Photo>
        <Content>
          <Name>
            <p>{teamMember.name}</p>
            <p>{teamMember.surname}</p>
          </Name>
          <IconContent>
            <FontAwesomeIcon icon={faUserTie} />
            <p>{teamMember.role}</p>
          </IconContent>
          <IconContent>
            <FontAwesomeIcon icon={faAt} />
            <p>{teamMember.email}</p>
          </IconContent>
        </Content>
      </ContentContainer>
      <Description>
        <h2>
          {currentLanguage === 'EN' && language.wordAbout}
          {teamMember.name}
          {currentLanguage === 'PL' && language.wordAbout}:
        </h2>
        {teamMember.description}
      </Description>
    </Container>
  );
};

TeamMember.propTypes = { teamMember };
export default TeamMember;
