import { useEffect, useState } from "react"
import PropTypes from 'prop-types'
import router from 'next/router'
import { useDispatch, useSelector } from 'react-redux'

import { setChoiceWindowActive, setChoiceWindowInactive } from '../../../Redux/actions'

import getAuthorisation from "../../../API/authorisation"
import get from "../../../API/get"
import post from "../../../API/post"

const ArticlesLogicLayer = ({ render, articles, ...props }) => {

  // const [ articles, setArticles ] = useState( [] );
  const [ isEditorActive, setEditorActive ] = useState( false );

  const language = useSelector( s => s.language.source );

  const dispatch = useDispatch();

  // const getArticles = async () => {
  //   const articles = await get( 'articles/shorts' );
  //   setArticles( articles.reverse() )
  // }

  const acceptDeleteArtice = async id => {
    const deleteArticle = await post( 'delete-article', { id } );
    if( deleteArticle.status === 'ok' ){
      getArticles();
      dispatch( setChoiceWindowInactive() );
    }
  }

  const deleteArticle = ( id ) => {
    dispatch( 
      setChoiceWindowActive({
        question: language.articlesPanel.articlesList.deleteQuestion,
        yesFunction: () => acceptDeleteArtice( id )
      }) 
    )
  }

  const handleAddNewArticleButton = () => {
    setEditorActive( !isEditorActive );
  }

  // useEffect(
  //   () => {
  //     getArticles();
  //   },
  //   []
  // );

  return render({
    articles,
    deleteArticle,
    handleAddNewArticleButton,
    isEditorActive,
  })
}

ArticlesLogicLayer.propTypes = {
  render: PropTypes.func.isRequired,
  articles: PropTypes.array.isRequired
}


export default ArticlesLogicLayer