import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';

import { Container } from './index-page__styles';
import SearchBox from './components/search-box';
import LatestArticles from './components/latest-articles';
import NewArticle from './components/new-article';
import Separator from '../UI/separator';
import Title from './components/title';

const IndexPagePresentationLayer = ({ articles }) => {
  const language = useSelector(s => s.language.source.indexPage);
  return (
    <Container>
      <SearchBox />
      <Separator height='30px' />
      <Title icon={faNewspaper}>{language.latestArticles}</Title>
      <Separator height='15px' />
      <NewArticle article={articles[0]} />
      <LatestArticles articles={articles.slice(1)} />
    </Container>
  );
};

IndexPagePresentationLayer.propTypes = {};

export default IndexPagePresentationLayer;
