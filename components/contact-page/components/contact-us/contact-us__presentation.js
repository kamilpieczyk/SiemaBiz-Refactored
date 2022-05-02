import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { Container, Form, Box } from './contact-us__styles';
import Input from '../../../UI/input';
import Button from '../../../UI/small-button';
import Separator from '../../../UI/separator';
import Loading from '../../../UI/loading-circle';
import { contactInputs, handleSendEmail, isLoading } from '../../@types';

const Presentation = ({ state, inputs, handleSendEmail, isLoading }) => {
  const language = useSelector(s => s.language.source.contactPage);
  return (
    <Container>
      <Form>
        <h2>{language.contactUs}</h2>
        {inputs.map(input => (
          <React.Fragment>
            <Input
              name={input.name}
              label={input.label}
              onChange={input.onChange}
              type={input.type}
              value={input.value}
            />
            <Separator height='10px' />
          </React.Fragment>
        ))}
        <Separator height='10px' />
        {isLoading ? (
          <Button maxWidth>
            <Loading text={language.loading} />
          </Button>
        ) : (
          <Button maxWidth click={handleSendEmail.bind(null, state)}>
            <FontAwesomeIcon icon={faEnvelope} />
            <Separator width='10px' />
            {language.send}
          </Button>
        )}
      </Form>
      <Box href='https://www.osterly-associates.co.uk/' target='_blank'>
        <h1>{language.sponsored}</h1>
        <img src='/images/osterly.jpg' width='200px' />
      </Box>
    </Container>
  );
};

Presentation.propTypes = {
  inputs: contactInputs,
  handleSendEmail,
  isLoading,
};
export default Presentation;
