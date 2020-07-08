import React from 'react';
import PropTypes from 'prop-types';

import { Container, Input, Message } from './user-sign-in__styles';
import Submit from '../../../../../../UI/submit';
import Button from '../../../../../../UI/small-button';
import Loading from '../../../../../../UI/loading-circle';
import colors from '../../../../../../../styles/colors';

const UserSignInPresentation = ({
  languageSource,
  state,
  setState,
  handleSubmitForm,
  handleSignUpButton,
}) => (
  <Container onSubmit={handleSubmitForm}>
    <Input
      type='text'
      placeholder={languageSource.navbar.login}
      value={state.username}
      onChange={e => setState.setUsername(e.target.value)}
    />

    {state.messangeLogin && <Message>{state.messangeLogin}</Message>}

    <Input
      type='password'
      placeholder={languageSource.navbar.password}
      value={state.password}
      onChange={e => setState.setPassword(e.target.value)}
    />

    {state.messangePassword && <Message>{state.messangePassword}</Message>}

    {state.isLoading ? (
      <Loading text={languageSource.navbar.loading} color={colors.main} />
    ) : (
      <Submit value={languageSource.navbar.signIn} />
    )}
    <Button maxWidth click={handleSignUpButton}>
      {languageSource.navbar.signUp}
    </Button>
  </Container>
);

UserSignInPresentation.propTypes = {
  languageSource: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired,
  setState: PropTypes.object.isRequired,
  handleSubmitForm: PropTypes.func.isRequired,
  handleSignUpButton: PropTypes.func.isRequired,
};

export default UserSignInPresentation;
