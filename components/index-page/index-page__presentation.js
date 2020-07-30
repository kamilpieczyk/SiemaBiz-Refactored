import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './index-page__styles';
import SearchBox from './components/search-box';
import LatestArticles from './components/latest-articles';

const IndexPagePresentationLayer = ({ articles }) => {
  return (
    <Container>
      <SearchBox />
      <LatestArticles articles={articles.slice(1)} />
    </Container>
  );
};

IndexPagePresentationLayer.propTypes = {};

export default IndexPagePresentationLayer;
