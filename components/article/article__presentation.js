import React from 'react'
import PropTypes from 'prop-types'

import {
  Container,

} from './article__styles'

import MainImageBox from './components/main-image-box'
const ArticlePresentationLayer = ({ article }) => {
  console.log( article );
  return(
    <Container>
      <MainImageBox
        image = { article.mainImage }
        title = { article.title }
        author = { article.author }
        date = { article.date }
      />
    </Container>
  )
}

ArticlePresentationLayer.propTypes = {
  article: PropTypes.object.isRequired,

}

export default ArticlePresentationLayer;