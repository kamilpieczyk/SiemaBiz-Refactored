import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Icon from '@material/react-material-icon';

import { Container, Option } from './menu__styles';

const Presentation = ({ source, isPageScrolled, handleOptionClick }) => (
  <Container isPageScrolled={isPageScrolled}>
    {source.map(item => (
      <Option key={item.title} onClick={handleOptionClick}>
        <Link href={item.href}>
          <a>
            {/* <Icon icon={item.icon} style={{ color: '#97100c', fontSize: '70px' }} /> */}
            <img src={item.image} width='80%' />
            <p>{item.title}</p>
          </a>
        </Link>
      </Option>
    ))}
  </Container>
);

Presentation.propTypes = {
  source: PropTypes.object.isRequired,
  isPageScrolled: PropTypes.bool,
  handleOptionClick: PropTypes.func,
};

export default Presentation;
