import { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import POST from '../../../../../API/post';
import auth from '../../../../../API/authorisation';
import { loginUser } from '../../../../../Redux/actions';

const Logic = ({ render, close }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [messangeLogin, setMessangeLogin] = useState('');
  const [messangePassword, setMessangePassword] = useState('');

  const isScrolled = useSelector(state => state.isPageScrolled);
  const languageSource = useSelector(state => state.language.source);

  const dispatch = useDispatch();

  const handleSubmitForm = e => {
    e.preventDefault();
    setLoading(true);
    messangeLogin && setMessangeLogin('');
    messangePassword && setMessangePassword('');
    POST('login', { username: login, password }).then(res => {
      setLoading(false);
      if (res.status === 'user_not_exisit') setMessangeLogin(languageSource.navbar.userNotExist);
      if (res.status === 'wrong_pwd') {
        setMessangePassword(languageSource.navbar.wrongPassword);
        setPassword('');
      }
      if (res.status === 'logged') {
        window.localStorage.setItem('passport', res.passport);

        auth(res.passport).then(res => {
          if (res.status === 'authorised') {
            dispatch(
              loginUser({
                username: res.username,
                privileges: res.privileges,
                email: res.email,
                name: res.name,
                surname: res.surname,
                phone: res.phone,
                id: res.id,
              })
            );
            close();
          } else {
            setMessangeLogin(languageSource.navbar.somethingWentWrong);
          }
        });
      }
    });
  };

  return render({
    isScrolled,
    isLoading,
    setLoading,
    login,
    setLogin,
    password,
    setPassword,
    messangeLogin,
    messangePassword,
    handleSubmitForm,
  });
};

Logic.propTypes = {
  render: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
};

export default Logic;
