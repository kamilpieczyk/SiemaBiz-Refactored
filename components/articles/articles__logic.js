import {  } from 'react'
import PropTypes from 'prop-types'

const ArticlesLogicLayer = ({ render, articles }) => {

  articles = articles.reverse();

  return render({
    articles,
  })
}

ArticlesLogicLayer.propTypes = {
  render: PropTypes.func.isRequired,
  articles: PropTypes.array.isRequired
}

export default ArticlesLogicLayer;