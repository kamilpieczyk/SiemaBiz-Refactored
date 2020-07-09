import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faUserCog, faUserTimes } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

import { user, handleDeleteUserButton } from '../../@types';
import { Container, UsernameContainer, ActionContainer } from './user__styles';
import Separator from '../../../../UI/separator';
import Loading from '../../../../UI/loading-circle';

const User = ({ user, deleteFunc, index }) => {
  const [isLoading, setLoading] = useState(false);
  const language = useSelector(s => s.language.source.administrationPanel);

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <UsernameContainer title={language.user}>
            <FontAwesomeIcon icon={faUserCircle} />
            <Separator width='10px' />
            {user.username}
          </UsernameContainer>
          <ActionContainer>
            <FontAwesomeIcon title={language.manageUser} icon={faUserCog} />
            <Separator width='20px' />
            <FontAwesomeIcon
              title={language.deleteUser}
              icon={faUserTimes}
              onClick={() => {
                setLoading(true);
                deleteFunc(user.username, index, () => setLoading(false));
              }}
            />
          </ActionContainer>
        </>
      )}
    </Container>
  );
};

User.propTypes = { user, deleteFunc: handleDeleteUserButton };
export default User;
