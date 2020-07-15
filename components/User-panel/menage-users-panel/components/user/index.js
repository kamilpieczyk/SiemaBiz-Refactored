import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faUserCog, faUserTimes } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

import { user, handleDeleteUserButton } from '../../@types';
import { Container, UsernameContainer, ActionContainer } from './user__styles';
import Separator from '../../../../UI/separator';
import Loading from '../../../../UI/loading-circle';
import EditWindow from '../editWindow';

const User = ({ user, deleteFunc, index, getUsersList }) => {
  const [isLoading, setLoading] = useState(false);
  const [isEdit, setEdit] = useState(false);
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
            {user.privilege === '225806' ? (
              <p>{language.rootUser}</p>
            ) : (
              <>
                <FontAwesomeIcon onClick={() => setEdit(true)} title={language.manageUser} icon={faUserCog} />
                <Separator width='20px' />
                <FontAwesomeIcon
                  title={language.deleteUser}
                  icon={faUserTimes}
                  onClick={() => {
                    setLoading(true);
                    deleteFunc(user.username, index, () => setLoading(false));
                  }}
                />
              </>
            )}
          </ActionContainer>
          {isEdit && <EditWindow user={user} close={() => setEdit(false)} refresh={getUsersList} />}
        </>
      )}
    </Container>
  );
};

User.propTypes = { user, deleteFunc: handleDeleteUserButton };
export default User;
