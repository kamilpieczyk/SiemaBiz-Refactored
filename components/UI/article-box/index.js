import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import Link from 'next/link'
import { useSelector } from 'react-redux';
import MaterialIcon from '@material/react-material-icon';

import { Container, Image, Content, ReadArticle, AuthorAndDate } from './article-box__styles';
import apiKey from '../../../API/key';
import Link from '../../../API/link';

const ArticleBox = ({ article }) => {
  const [imageWidth, setImageWidth] = useState(170);
  const language = useSelector(s => s.language.source);
  const introduction = article.introduction.split(' ');

  useEffect(() => {
    const imageWidth = document.getElementById('article_image').offsetWidth;
    setImageWidth(imageWidth);
  }, []);

  return (
    <Container>
      <Image id='article_image' imageWidth={imageWidth} src={`${apiKey}uploads/images/${article.image}`} />
      <Content>
        <h2>{article.title}</h2>
        <AuthorAndDate>
          <h4>{article.category}</h4>
          <p>{article.date}</p>
          <h3>
            <MaterialIcon icon='account_circle' />
            {article.author}
          </h3>
        </AuthorAndDate>
        <p>
          {introduction.slice(0, 60).join(' ') + ' '}
          <Link adress={{ pathname: '/article', query: { id: article._id } }}>
            <a>...{language.articlesPage.button}</a>
          </Link>
        </p>
        <ReadArticle>
          <Link adress={{ pathname: '/article', query: { id: article._id } }}>
            <a>{language.articlesPage.button}</a>
          </Link>
        </ReadArticle>
      </Content>
    </Container>
  );
};

ArticleBox.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    introduction: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }),
};

export default ArticleBox;
