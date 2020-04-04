import React from 'react'
import PropTypes from 'prop-types'

import Logic from './article__logic'
import PresentationLayer from './article__presentation'

const Article = props => {
  
  return(
    <Logic
      { ...props }
      article = { props.ssr_article }
      render = { 
        newProps => (
          <PresentationLayer
            { ...newProps }
            article = { props.ssr_article } />
        )
      }
    />
  )
}

Article.propTypes = {
  ssr_article: PropTypes.object.isRequired
}

export default Article;