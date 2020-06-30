import React from 'react';
import PropTypes from 'prop-types';
import UseAnimation from 'react-useanimations';

import { Container, Burger, Text } from './menu-button__style';
import { setMenuActive, setMenuInactive } from '../../../../../Redux/actions';
import Separator from '../../../../UI/separator';

const Presentation = ({ isClicked, handleClick, isMenuActive, dispatch }) => (
  <Container
    onClick={() => {
      handleClick();
      if (isMenuActive) dispatch(setMenuInactive());
      else dispatch(setMenuActive());
    }}
  >
    <Burger isClicked={isMenuActive} />
    <Separator width='10px' />
    {/* <UseAnimation animationKey='menu' /> */}
    <Text>MENU</Text>
  </Container>
);

Presentation.propTypes = {
  isClicked: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  isMenuActive: PropTypes.bool,
  dispatch: PropTypes.func,
};

export default Presentation;
