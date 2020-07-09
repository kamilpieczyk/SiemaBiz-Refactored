import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { render } from './@types';
import POST from '../../../API/post';

const Logic = ({ render }) => {
  const [users, setUsers] = useState([]);

  const currentUserID = useSelector(s => s.user.id);
  const router = useRouter();

  const getUserList = async () => {
    const data = await POST('get-users-list', {
      userID: currentUserID,
    });
    console.log(data);
    if (data) setUsers(data);
    else router.push('/');
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

  useEffect(() => {
    currentUserID && getUserList();
  }, [currentUserID]);

  return render({
    state: { users },
    handlers: { handleDeleteUserButton },
  });
};

Logic.propTypes = { render };
export default Logic;
