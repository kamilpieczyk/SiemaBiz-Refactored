import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './articles__styles'
import MainArticle from './main-article'

const ArticlesPresentationLayer = ({ articles }) => {

  return(
    <Container>
      <MainArticle articles = { articles.slice( 0, 3) } />
    </Container>
  )
}

ArticlesPresentationLayer.propTypes = {
  articles: PropTypes.array.isRequired,
}

export default ArticlesPresentationLayer;