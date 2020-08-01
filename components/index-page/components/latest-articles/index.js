import React from 'react';

import { Container } from './latest-articles__styles';
import LatestArticleBox from './latest-article-box';

const LatestArticles = ({ articles }) => {
  return (
    <Container>
      {articles.map(article => (
        <LatestArticleBox article={article} key={article._id} />
      ))}
    </Container>
  );
};

export default LatestArticles;
