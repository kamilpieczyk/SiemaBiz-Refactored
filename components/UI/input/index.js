import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Container, Inp, Label, Textarea } from './input__styles';

const Input = ({ label, value, onChange, type, name, maxlength }) => {
  const [isFocused, setFocused] = useState(false);

  return (
    <Container focus={isFocused}>
      <Label focus={isFocused}>{label}</Label>
      {type && type === 'textarea' ? (
        <Textarea
          value={value}
          onChange={onChange}
          onBlur={() => setFocused(false)}
          onFocus={() => setFocused(true)}
          focus={isFocused}
          type={type || 'text'}
          name={name}
        />
      ) : (
        <Inp
          value={value}
          onChange={onChange}
          placeholder={label}
          onBlur={() => setFocused(false)}
          onFocus={() => setFocused(true)}
          focus={isFocused}
          type={type || 'text'}
          name={name}
          maxLength={maxlength}
        />
      )}
    </Container>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  maxlength: PropTypes.string,
};

export default Input;
