import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import gsap from 'gsap';
import MaterialIcon from '@material/react-material-icon';

import { Container, Input, Warning, ShowPasswordEye } from './login-popup__styles';
import Submit from '../../../../UI/submit';
import Loading from '../../../../UI/loading-circle';
import colors from '../../../../../styles/colors';

const Present = ({
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
  isPasswordShown,
  setPasswordShown,
}) => {
  const languageSource = useSelector(state => state.language.source);
  const containerRef = useRef(null);

  useEffect(() => {
    const loginBox = containerRef.current;
    const tl = gsap.timeline({ repeat: 0, delay: 0 });
    tl.fromTo(
      loginBox,
      {
        opacity: 0,
        y: -50,
        duration: 0.4,
      },
      {
        opacity: 1,
        y: 15,
        duration: 0.4,
      }
    );
  }, []);

  return (
    <Container isScrolled={isScrolled} ref={containerRef}>
      <form onSubmit={handleSubmitForm}>
        <div>
          <label>{languageSource.navbar.login}</label>
          <div>
            <Input
              type='text'
              placeholder='np. Siemabiz88'
              value={login}
              onChange={e => setLogin(e.target.value)}
            />
          </div>
        </div>

        {messangeLogin && (
          <Warning>
            <strong>! </strong>
            {messangeLogin}
          </Warning>
        )}

        <div>
          <label>{languageSource.navbar.password}</label>
          <div style={{ position: 'relative' }}>
            <Input
              type={isPasswordShown ? 'text' : 'password'}
              placeholder='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <ShowPasswordEye onClick={() => setPasswordShown(!isPasswordShown)}>
              <MaterialIcon icon={isPasswordShown ? 'visibility_off' : 'visibility'} />
            </ShowPasswordEye>
          </div>
        </div>

        {messangePassword && (
          <Warning>
            <strong>! </strong>
            {messangePassword}
          </Warning>
        )}

        {isLoading ? (
          <Loading color={colors.main} text={languageSource.navbar.loading} margin='10px 0' />
        ) : (
          <Submit value={languageSource.navbar.submit} />
        )}
      </form>
    </Container>
  );
};

Present.propTypes = {
  isScrolled: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool,
  setLoading: PropTypes.func,
  login: PropTypes.string.isRequired,
  setLogin: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
  messangeLogin: PropTypes.string,
  messangePassword: PropTypes.string,
};

export default Present;
