import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import { translateCategory } from '../../data/article-categories'
import { useState, useEffect, useRef } from 'react'

const ArticleLogicLayer = ({ render, article }) => {

  const [ scrollPosition, setScrollPosition ] = useState( 0 );
  const [ isScrolled, setScrolled ] = useState( false );

  const language = useSelector( s => s.language.source );
  const breadcrumbs = [
    language.menu[0].title,
    language.articlesPage.title
  ];
  const category = article.category;
  const sidebarRef = useRef();

  const getScrollPosition = () => {
    const scroll = window.scrollY;
    setScrollPosition( scroll );
  }

  useEffect(
    () => {
      window.addEventListener( 'scroll', getScrollPosition );
      const sidebarPosition = sidebarRef.current.offsetTop;
      if( sidebarPosition <= scrollPosition ) setScrolled( true );
      else setScrolled( false );
      
      return () => window.removeEventListener( 'scroll', getScrollPosition() );
    }, [ scrollPosition ]
  )

  return render({
    breadcrumbs,
    category,
    sidebarRef,
    isScrolled,
    scrollPosition
  })
}

ArticleLogicLayer.propTypes = {
  render: PropTypes.func.isRequired
}

export default ArticleLogicLayer;