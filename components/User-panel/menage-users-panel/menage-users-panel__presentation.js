import React from 'react';
import { useSelector } from 'react-redux';

import { state, handlers } from './@types';
import { Container } from './menage-users-panel__styles';
import { SectionContainer } from '../user-panel__styles';
import Breadcrumbs from '../../UI/breadcrumbs';
import Separator from '../../UI/separator';
import Loading from '../../UI/loading-circle';
import User from './components/user';

const Presentation = ({ state, handlers }) => {
  const language = useSelector(s => s.language.source.administrationPanel);

  return (
    <Container>
      <SectionContainer>
        <Breadcrumbs breadcrumbs={[language.adminPanel]} generalCrumb={language.manageUsers} />
      </SectionContainer>
      <Separator height='30px' />

      {state.loading ? (
        <Loading />
      ) : (
        state.users?.map((user, index) => (
          <User
            index={index}
            user={user}
            key={user._id}
            deleteFunc={handlers.handleDeleteUserButton}
            getUsersList={handlers.getUserList}
          />
        ))
      )}
    </Container>
  );
};

Presentation.propTypes = { state, handlers };
export default Presentation;
