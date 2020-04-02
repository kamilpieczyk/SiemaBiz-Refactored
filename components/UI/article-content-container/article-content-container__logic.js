import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'

const ArticleContentContainerLogicLayer = ({ render, articles }) => {

  const router = useRouter();
  const site = router.query.site;

  const getSlicedArticles = () => {
    const reversedArticles = [ ...articles ];
    const newArticles = reversedArticles.slice( site * 5 - 5, site * 5 );

    return newArticles;
  }

  const generateSites = () => {
    const numberOfSites = Math.ceil( articles.length / 5 );
    const array = [];
    
    for( let i = 1; array.length < numberOfSites; i++ ){
      array.push( i );
    }
    return array;
  }

  const handleJumpToSite = ( siteNo ) => {
    router.push({
      pathname: '/articles',
      query: { site: siteNo }
    });
  }

  return render({
    articles: getSlicedArticles(),
    sites: generateSites(),
    state: {
      currentSite: site
    },
    handlers: {
      handleJumpToSite,
    }
  })
}

ArticleContentContainerLogicLayer.propTypes = {
  render: PropTypes.func.isRequired,
  articles: PropTypes.array.isRequired
}

export default ArticleContentContainerLogicLayer;