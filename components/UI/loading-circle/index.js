import React from 'react';
import Icon from '@material/react-material-icon';
import UseAnimation from 'react-useanimations';

import { Container, CircleContainer, Text } from './loading-circle__styles';
import Separator from '../separator';

export default ({ color, text, margin, size }) => {
  return (
    <Container margin={margin}>
      <CircleContainer id='icon-container'>
        {/* <Icon icon='refresh' style={{ color, fontSize: '3rem' }} /> */}
        <UseAnimation animationKey='loading' size={size} />
      </CircleContainer>
      {text && (
        <>
          <Separator width='10px' />
          <Text color={color}>{text}</Text>
        </>
      )}
    </Container>
  );
};
