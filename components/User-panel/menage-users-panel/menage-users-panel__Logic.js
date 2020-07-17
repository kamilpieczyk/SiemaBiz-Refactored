import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import { render } from './@types';
import POST from '../../../API/post';
import { useLink } from '../../../API/link';
import { setChoiceWindowActive } from '../../../Redux/actions';

const Logic = ({ render }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const currentUserID = useSelector(s => s.user.id);
  const currentUserPrivileges = useSelector(s => s.user.privileges);
  const language = useSelector(s => s.language.source.administrationPanel);
  const router = useRouter();
  const dispatch = useDispatch();
  const link = useLink();

  const getUserList = async () => {
    const data = await POST('get-users-list', {
      userID: currentUserID,
    });
    if (data) {
      setLoading(false);
      setUsers(data);
    } else router.push('/');
  };

  const handleDeleteUserButton = async (username, index, callback) => {
    const data = await POST('delete-user', { username });
    if (data.status === 'ok') {
      callback();
      const usersCopy = [...users];
      usersCopy.splice(index, 1);
      setUsers(usersCopy);
    }
  };

  const handleDeleteUser = (callback, username) => {
    dispatch(
      setChoiceWindowActive({
        question: language.deleteQuestion(username),
        yesFunction: callback,
      })
    );
  };

  useEffect(() => {
    currentUserID && getUserList();
  }, [currentUserID]);

  useEffect(() => {
    if (currentUserPrivileges && currentUserPrivileges < 225805) link('/');
  }, [currentUserPrivileges]);

  return render({
    state: { users, loading },
    handlers: { handleDeleteUserButton, getUserList, handleDeleteUser },
  });
};

Logic.propTypes = { render };
export default Logic;
