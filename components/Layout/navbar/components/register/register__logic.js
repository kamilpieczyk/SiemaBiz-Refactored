import { useState, useEffect, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { faUserTag, faKey, faAt, faMobile } from '@fortawesome/free-solid-svg-icons';

import { render } from './register__types';
import POST from '../../../../../API/post';
import { setRegistrationWindow, loginUser, setPopupWindowActive } from '../../../../../Redux/actions';

const Logic = ({ render }) => {
  const [buttonPosition, setButtonPosition] = useState({
    x: document.getElementById('registerWindowButton')
      ? document.getElementById('registerWindowButton').offsetLeft
      : 0,
    y: document.getElementById('globalMenu') ? document.getElementById('globalMenu').offsetHeight + 25 : 0,
  });
  // const [buttonPosition, setButtonPosition] = useState({
  //   x: document.getElementById('registerWindowButton').offsetLeft,
  //   y: document.getElementById('globalMenu').offsetHeight + 25,
  // });
  const [isLoading, setLoading] = useState(false);
  const [values, setValues] = useState({
    username: '',
    password: '',
    email: '',
    phone: '',
  });
  const [error, setError] = useState({
    isError: false,
    errorName: '',
    errorTitle: '',
  });

  const language = useSelector(s => s.language.source.navbar.registration);
  const device = useSelector(s => s.deviceScreen);
  const dispatch = useDispatch();

  const getRegisterButtonPosition = () => {
    if (device === 'desktop') {
      const button = document.getElementById('registerWindowButton');
      const menu = document.getElementById('globalMenu');
      const x = button.offsetLeft;
      const y = menu.offsetHeight + 25;
      setButtonPosition({ x, y });
    } else {
      setButtonPosition({ x: 0, y: 0 });
    }
  };

  const inputsHandler = (value, name) => {
    const copyValues = { ...values };
    for (let input of inputs) {
      if (input.name === name) copyValues[input.name] = value;
    }
    setValues(copyValues);
    handleValidation(value, name);
  };

  const handleSendButton = async () => {
    setLoading(true);
    let error = false;
    for (let input of inputs) {
      const validation = handleValidation(input.value, input.name);
      if (validation) {
        setLoading(false);
        error = true;
        break;
      }
    }
    if (!error) {
      const data = await POST('register', values);
      const status = data.status;
      const { username, privilege, email, name, surname, phone, userID } = data.user;
      // console.log(data);
      if (status === 'user_alredy_exist') {
        setError({ isError: true, errorName: 'username', errorTitle: language.userExist });
        setLoading(false);
      } else if (status === 'email_alredy_exist') {
        setError({ isError: true, errorName: 'email', errorTitle: language.emailExist });
        setLoading(false);
      } else {
        setLoading(false);
        dispatch(setRegistrationWindow({ isActive: false }));
        dispatch(
          loginUser({
            username,
            privileges: privilege,
            email,
            name,
            surname,
            phone,
            id: userID,
          })
        );
        dispatch(
          setPopupWindowActive({
            title: language.popup.title(username),
            messenge: language.popup.message,
          })
        );
      }
    }
  };

  const handleValidation = (value, name) => {
    if (name === 'username') {
      if (value.length < 8) {
        setError({
          isError: true,
          errorName: 'username',
          errorTitle: language.usernameLength,
        });
        return true;
      } else {
        setError({
          ...error,
          isError: false,
        });
        return false;
      }
    } else if (name === 'password') {
      const passRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      const check = passRegEx.exec(value);
      if (value.length < 8) {
        setError({
          isError: true,
          errorName: 'password',
          errorTitle: language.passwordLength,
        });
        return true;
      } else if (!check) {
        setError({
          isError: true,
          errorName: 'password',
          errorTitle: language.passwordTips,
        });
        return true;
      } else {
        setError({
          ...error,
          isError: false,
        });
        return false;
      }
    } else if (name === 'email') {
      const mailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const check = mailRegEx.exec(value);
      if (!check) {
        setError({
          isError: true,
          errorName: 'email',
          errorTitle: language.emailError,
        });
        return true;
      } else {
        setError({
          ...error,
          isError: false,
        });
        return false;
      }
    } else if (name === 'phone') {
      const phoneRegEx = /(\s*\(?0\d{4}\)?(\s*|-)\d{3}(\s*|-)\d{3}\s*)|(\s*\(?0\d{3}\)?(\s*|-)\d{3}(\s*|-)\d{4}\s*)|(\s*(7|8)(\d{7}|\d{3}(\-|\s{1})\d{4})\s*)/;
      const check = phoneRegEx.exec(value);
      if (!check) {
        setError({
          isError: true,
          errorName: 'phone',
          errorTitle: language.phoneError,
        });
        return true;
      } else {
        setError({
          ...error,
          isError: false,
        });
        return false;
      }
    }
  };

  const handleMobileCloseButton = () => {
    dispatch(setRegistrationWindow({ isActive: false }));
  };

  const inputs = [
    {
      name: 'username',
      icon: faUserTag,
      type: 'text',
      label: language.login,
      value: values.username,
    },
    {
      name: 'password',
      icon: faKey,
      type: 'password',
      label: language.password,
      value: values.password,
    },
    {
      name: 'email',
      icon: faAt,
      type: 'email',
      label: language.email,
      value: values.email,
    },
    {
      name: 'phone',
      icon: faMobile,
      type: 'phone',
      label: language.phone,
      value: values.phone,
    },
  ];

  useEffect(() => {
    document.addEventListener('scroll', getRegisterButtonPosition);
    return () => {
      document.removeEventListener('scroll', getRegisterButtonPosition);
    };
  }, []);

  return render({
    state: { buttonPosition, isLoading, error },
    handlers: { inputsHandler, handleSendButton, handleMobileCloseButton },
    inputs,
  });
};

Logic.propTypes = { render };
export default Logic;
