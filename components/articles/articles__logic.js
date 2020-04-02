import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import get from '../../API/get'

const ArticlesLogicLayer = ({ render, articles }) => {

  const [ fetchedArticles, setFetchedArticles ] = useState( null );

  const newArticles = [ ...articles.reverse() ];

  const getArticlesForFront = async () => {
    const artics = await get( 'articles/shorts' );
    setFetchedArticles( artics.reverse() );
  }

  useEffect( getArticlesForFront, [] );

  return render({
    articles: fetchedArticles ? fetchedArticles : newArticles,
  })
}

ArticlesLogicLayer.propTypes = {
  render: PropTypes.func.isRequired,
  articles: PropTypes.array.isRequired
}

export default ArticlesLogicLayer;