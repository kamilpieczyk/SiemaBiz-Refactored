import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MaterialIcon from '@material/react-material-icon';

import { Container, MainField, Button, Fields, Field } from './choose-input__styles';

const ChooseInput = ({ fields, choosenFieldIndex, onChange }) => {
  const [isActive, setActive] = useState(false);

  return (
    <Container>
      <MainField>
        {typeof fields[choosenFieldIndex] === 'string'
          ? fields[choosenFieldIndex]
          : fields[choosenFieldIndex].title}
      </MainField>
      <Button onClick={() => setActive(!isActive)}>
        <MaterialIcon icon={isActive ? 'keyboard_arrow_up' : 'keyboard_arrow_down'} />
      </Button>
      <Fields active={isActive}>
        {fields.map((field, index) => (
          <Field
            key={index}
            onClick={() => {
              onChange(field, index);
              setActive(false);
            }}
          >
            {typeof field === 'string' ? field : field.title}
          </Field>
        ))}
      </Fields>
    </Container>
  );
};

ChooseInput.propTypes = {
  fields:
    PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        href: PropTypes.string,
        icon: PropTypes.string,
      })
    ).isRequired || PropTypes.string.isRequired,
  choosenFieldIndex: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ChooseInput;
