import React from 'react'
import PropTypes from 'prop-types'

import LogicLayer from './article-content-container__logic'
import PresentationLayer from './article-content-container__presentation'

const ArticleContentContainer = ({ articles }) => (
  <LogicLayer
    articles = { articles }
    render = { props => <PresentationLayer { ...props } />}
  />
)

ArticleContentContainer.propTypes = {
  articles: PropTypes.array.isRequired
}

export default ArticleContentContainer;