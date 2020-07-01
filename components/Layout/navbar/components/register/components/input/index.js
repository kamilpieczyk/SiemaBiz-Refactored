import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation, faLanguage } from '@fortawesome/free-solid-svg-icons';

import { Container, Inpt, Error } from './input__styles';
import { input, inputsHandler } from '../../register__types';
import Separator from '../../../../../../UI/separator';

const Input = ({ values, callback, error }) => {
  const [value, setValue] = useState('');
  const [isFocus, setFocus] = useState(false);
  return (
    <React.Fragment>
      <Container isFocus={isFocus}>
        <FontAwesomeIcon icon={values.icon} size='lg' title={values.label} />
        <Inpt
          type={values.type ? values.type : 'text'}
          value={values.value}
          name={values.name}
          onChange={e => {
            setValue(e.target.value);
            callback(e.target.value, values.name);
          }}
          onFocus={() => setFocus(!isFocus)}
          onBlur={() => setFocus(!isFocus)}
        />
      </Container>
      {error && (
        <Error>
          <FontAwesomeIcon icon={faExclamation} /> {error}
        </Error>
      )}
      <Separator height='10px' />
    </React.Fragment>
  );
};

Input.propTypes = { values: input, callback: inputsHandler };
export default Input;
