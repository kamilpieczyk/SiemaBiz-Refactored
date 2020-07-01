import { useState, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { faUserTag, faKey, faAt, faMobile } from '@fortawesome/free-solid-svg-icons';

import { render } from './register__types';
import POST from '../../../../../API/post';

const Logic = ({ render }) => {
  const [buttonPosition, setButtonPosition] = useState({
    x: document.getElementById('registerWindowButton').offsetLeft,
    y: document.getElementById('globalMenu').offsetHeight + 25,
  });
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

  const getRegisterButtonPosition = () => {
    const button = document.getElementById('registerWindowButton');
    const menu = document.getElementById('globalMenu');
    const x = button.offsetLeft;
    const y = menu.offsetHeight + 25;
    setButtonPosition({ x, y });
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
    console.log(values);
    const data = await POST('register', values);
    console.log(data);
  };

  const handleValidation = (value, name) => {
    if (name === 'username') {
      if (value.length < 8)
        setError({
          isError: true,
          errorName: 'username',
          errorTitle: language.usernameLength,
        });
      else
        setError({
          ...error,
          isError: false,
        });
    }
  };

  const inputs = [
    {
      name: 'username',
      icon: faUserTag,
      type: 'text',
      label: language.login,
    },
    {
      name: 'password',
      icon: faKey,
      type: 'password',
      label: language.password,
    },
    {
      name: 'email',
      icon: faAt,
      type: 'text',
      label: language.email,
    },
    {
      name: 'phone',
      icon: faMobile,
      type: 'phone',
      label: language.phone,
    },
  ];

  useEffect(() => {
    document.addEventListener('scroll', getRegisterButtonPosition);
    return () => {
      document.removeEventListener('scroll', getRegisterButtonPosition);
    };
  }, []);

  // useEffect(() => {
  //   handleValidation();
  // }, [values]);

  return render({
    state: { buttonPosition, isLoading, error },
    handlers: { inputsHandler, handleSendButton },
    inputs,
  });
};

Logic.propTypes = { render };
export default Logic;
