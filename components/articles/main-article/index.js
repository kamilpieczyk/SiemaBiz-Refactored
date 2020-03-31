import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Container, TextContent } from './main-article__styles'

const MainArticle = ({ articles }) => {

  const [ index, setIndex ] = useState( 0 );

  const article = articles[ index ];

  console.log( article );
  
  return(
    <Container image = { article.image } >
      <TextContent>
        { article.introduction }
      </TextContent>
    </Container>
  )
}

MainArticle.propTypes = {
  articles: PropTypes.array.isRequired
}

export default MainArticle;