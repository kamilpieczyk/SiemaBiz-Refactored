import { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import cookies from 'js-cookie';

import POST from '../../../../../API/post';
import auth from '../../../../../API/authorisation';
import { loginUser } from '../../../../../Redux/actions';

const Logic = ({ render, close }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordShown, setPasswordShown] = useState(false);
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
    POST('login', { username: login, password }).then(async res => {
      setLoading(false);
      if (res.status === 'user_not_exisit') setMessangeLogin(languageSource.navbar.userNotExist);
      else if (res.status === 'wrong_pwd') {
        setMessangePassword(languageSource.navbar.wrongPassword);
        setPassword('');
      } else if (res.status === 'logged') {
        window.localStorage.setItem('token', res.token);
        cookies.set('refresh', res.refreshToken, { expires: 1 });
        auth().then(res => {
          if (!res) {
            console.error('no res');
            setMessangeLogin(languageSource.navbar.somethingWentWrong);
          } else if (res && res.status === 'authenticated') {
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
    isPasswordShown,
    setPassword,
    setPasswordShown,
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
