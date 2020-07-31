import React from 'react';

import { Container } from './latest-articles__styles';
import ArticleBox from '../../../UI/article-box';

const LatestArticles = ({ articles }) => {
  return (
    <Container>
      {articles.map(article => (
        <ArticleBox key={article._id} article={article} />
      ))}
    </Container>
  );
};

export default LatestArticles;
