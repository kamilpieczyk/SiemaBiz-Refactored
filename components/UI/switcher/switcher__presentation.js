import React from 'react';
import PropTypes from 'prop-types';

import { Container, Dot, Text } from './style';

const Presentation = props => (
  <Container onClick={props.switch}>
    <Dot isSwitched={props.isSwitched} />
    <Text>{props.text}</Text>
  </Container>
);

Presentation.propTypes = {
  text: PropTypes.string.isRequired,
  switch: PropTypes.func.isRequired,
  isSwitched: PropTypes.bool,
};

export default Presentation;
