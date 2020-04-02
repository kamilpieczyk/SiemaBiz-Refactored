import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { useSelector } from 'react-redux'

import { Container, Image, Content, ReadArticle } from './article-box__styles'
import apiKey from '../../../API/key'

const ArticleBox = ({ article }) => {
  
  const language = useSelector( s => s.language.source );

  return(
    <Container>
      <Image src = { `${ apiKey }uploads/images/${ article.image }` } />
      <Content>
        <h2>{ article.title.slice( 0, 50 ) }</h2>
        <p>{ article.introduction.slice( 0, 460 ) }( ... )</p>
        <ReadArticle>
          <Link href = { { pathname: 'article', query: { id: article._id } } }>
            <a>{ language.articlesPage.button }</a>
          </Link>
        </ReadArticle>
      </Content>
    </Container>
  )
}

ArticleBox.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    introduction: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  })
}

export default ArticleBox;