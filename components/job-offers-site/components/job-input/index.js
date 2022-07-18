import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MaterialIcon from '@material/react-material-icon';
import { useRouter } from 'next/router';

import { Container, Input } from './job-input__styles';

const JobInput = ({ callback, location }) => {
  const [value, setValue] = useState('');
  const [isActive, setActive] = useState(false);
  const router = useRouter();

  const getInitialValue = () => {
    if (location) setValue(router.query.location);
    else setValue(router.query.search);
  };

  useEffect(() => {
    getInitialValue();
  }, []);

  return (
    <Container isActive={isActive}>
      <Input
        value={value}
        onChange={e => {
          setValue(e.target.value);
          callback(e.target.value);
        }}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
      />
      <MaterialIcon icon={location ? 'location_on' : 'search'} />
    </Container>
  );
};

JobInput.propTypes = {
  callback: PropTypes.func.isRequired,
  location: PropTypes.bool,
};

export default JobInput;
