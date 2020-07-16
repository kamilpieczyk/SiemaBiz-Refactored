import React from 'react';
// import Link from 'next/link';
import PropTypes from 'prop-types';
import Icon from '@material/react-material-icon';

import { Container, Option } from './menu__styles';
import Link from '../../../../../API/link';

const Presentation = ({ source, isPageScrolled, handleOptionClick }) => {
  return (
    <Container isPageScrolled={isPageScrolled}>
      {source.map(item => (
        <Option key={item.title} onClick={handleOptionClick}>
          <Link adress={item.href}>
            <img src={item.image} width='80%' />
            <p>{item.title}</p>
          </Link>
        </Option>
      ))}
    </Container>
  );
};

Presentation.propTypes = {
  source: PropTypes.object.isRequired,
  isPageScrolled: PropTypes.bool,
  handleOptionClick: PropTypes.func,
};

export default Presentation;
