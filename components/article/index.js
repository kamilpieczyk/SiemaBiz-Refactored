import React from 'react'
import PropTypes from 'prop-types'

import Logic from './article__logic'
import PresentationLayer from './article__presentation'

const Article = props => (
  <Logic
    { ...props }
    render = { newProps => <PresentationLayer { ...newProps } article = { props.article } /> }
  />
)

Article.propTypes = {
  article: PropTypes.object.isRequired
}

export default Article;