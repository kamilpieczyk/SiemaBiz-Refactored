import React from 'react';
import PropTypes from 'prop-types';
import MaterialIcon from '@material/react-material-icon';

import { Container, Title, InfoBox } from './main-image-box__styles';

import Separator from '../../../UI/separator';

const MainImageBox = ({ image, title, author, date }) => {
  return (
    <Container img={image}>
      <Title>{title}</Title>
      <InfoBox>
        <div>
          <MaterialIcon icon='person_pin' />
          <p>{author}</p>
        </div>
        <Separator width='15px' />
        <div>
          <MaterialIcon icon='event_note' />
          <p>{date}</p>
        </div>
      </InfoBox>
    </Container>
  );
};

MainImageBox.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default MainImageBox;
