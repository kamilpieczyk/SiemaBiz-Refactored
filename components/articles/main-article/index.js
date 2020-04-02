import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import MaterialIcon from '@material/react-material-icon'
import { useSelector } from 'react-redux'
import Link from 'next/link'

import { Container, TextContent, ArrowButton, ArrowButtonContainer } from './main-article__styles'
import Dots from '../../UI/dotted_breadcrumbs'
import Separator from '../../UI/separator'
import Button from '../../UI/small-button'
import apiKey from '../../../API/key'

const MainArticle = ({ articles }) => {

  const [ index, setIndex ] = useState( 0 );
  const [ isAutoPlay, setAutoPlay ] = useState( true );

  const language = useSelector( s => s.language.source );

  const article = articles[ index ];

  const handleChangeArticle = ( direction, button ) => {
    if( button ) setAutoPlay( false );

    if( direction === 'right' ){
      if( index < 2 ) setIndex( index +1 );
      else setIndex( 0 );
    }
    else if( direction === 'left' ){
      if( index > 0 ) setIndex( index -1 );
      else setIndex( 2 );
    }
  }

  // console.log( article );

  useEffect( () => {
    if( isAutoPlay ) setTimeout( () => handleChangeArticle( 'right' ), 5000 );
  }, [ index ] );
  
  return(
    <Container image = { article.image } >
      <TextContent>
        <h1>{ article.title }</h1>
        <p>{ article.introduction.slice( 0, 350 ) }</p>
        <Link href = { `article?id=${ article._id }` }>
          <a><Button>
            {
              article.category !== 'videos'
                ? article.category !== 'top-ten-tips'
                  ? language.articlesPage.button
                  : language.articlesPage.buttonVideo
                : language.articlesPage.buttonVideo
            }
          </Button></a>
        </Link>
        <Dots numberOfSites = { 3 } activeCrumb = { index +1 }/>
      </TextContent>
      <ArrowButtonContainer>
        <ArrowButton onClick = { () => handleChangeArticle( 'left', true ) } >
          <MaterialIcon icon = 'keyboard_arrow_left' />
        </ArrowButton>
        <Separator width = '10px' />
        <ArrowButton onClick = { () => handleChangeArticle( 'right', true ) } >
          <MaterialIcon icon = 'keyboard_arrow_right' />
        </ArrowButton>
      </ArrowButtonContainer>
    </Container>
  )
}

MainArticle.propTypes = {
  articles: PropTypes.array.isRequired
}

export default MainArticle;