import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUserTag, faKey, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import gsap from 'gsap';

import { state, handlers, inputs } from './register__types';
import { Container, Header, Information, Form, MobileClose, MobileContainer } from './register__styles';
import Input from './components/input';
import Button from '../../../../UI/small-button';
import Loading from '../../../../UI/loading-circle';
import Separator from '../../../../UI/separator';

const Presentation = ({ state, handlers, inputs }) => {
  const language = useSelector(s => s.language.source.navbar.registration);
  const device = useSelector(s => s.deviceScreen);
  const containerRef = useRef(null);

  useEffect(() => {
    const registerBox = containerRef.current;
    const tl = gsap.timeline({ repeat: 0, delay: 0 });
    tl.from(registerBox, {
      y: -1000,
      opacity: 0,
      duration: 0.2,
    }).to(registerBox, {
      opacity: 1,
      duration: 0.2,
    });
  }, []);

  return (
    <>
      <Container ref={containerRef} position={state.buttonPosition}>
        {device === 'mobile' && (
          <MobileClose onClick={handlers.handleMobileCloseButton}>
            <FontAwesomeIcon icon={faTimesCircle} size='2x' />
          </MobileClose>
        )}
        <Header>
          <FontAwesomeIcon icon={faSignInAlt} size='lg' />
          <h1>{language.signUp}</h1>
        </Header>
        <Information>{language.information}</Information>
        <Form>
          {inputs.map(input => {
            let err = null;
            if (state.error.isError && state.error.errorName === input.name) err = state.error.errorTitle;
            return <Input key={input.name} values={input} callback={handlers.inputsHandler} error={err} />;
          })}
        </Form>
        <Separator height='60px' />
        {state.isLoading ? (
          <Button maxWidth>
            <Loading text={language.loading} />
          </Button>
        ) : state.error.isError ? (
          <Button maxWidth>{language.issues}</Button>
        ) : (
          <Button maxWidth click={handlers.handleSendButton}>
            {language.button}
          </Button>
        )}
      </Container>
      {device === 'mobile' && <MobileContainer />}
    </>
  );
};

Presentation.propTypes = { state, handlers, inputs };
export default Presentation;
