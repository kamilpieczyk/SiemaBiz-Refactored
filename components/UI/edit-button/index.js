import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import MaterialIcon from '@material/react-material-icon';

import { Button } from './edit-button__styles';

const EditButton = ({ color }) => {
  const language = useSelector(s => s.language.source);

  return (
    <Button color={color}>
      <MaterialIcon icon='edit' />
      <div>{language.general.edit}</div>
    </Button>
  );
};

EditButton.propTypes = {
  color: PropTypes.string,
};

export default EditButton;
