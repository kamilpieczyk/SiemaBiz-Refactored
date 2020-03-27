import { useEffect, useState, useCallback } from "react"
import PropTypes from 'prop-types'
import router from 'next/router'
import { useDispatch, useSelector } from 'react-redux'

import { setChoiceWindowActive, setChoiceWindowInactive } from '../../../Redux/actions'

import getAuthorisation from "../../../API/authorisation"
import get from "../../../API/get"
import post from "../../../API/post"

const ArticlesLogicLayer = ({ render, articles, ...props }) => {

  const [ articlesState, setArticlesState ] = useState( [ ...articles ] );
  const [ isEditorActive, setEditorActive ] = useState( false );
  const [ isEditorActiveInEditMode, setEditorActiveInEditMode ] = useState( false );

  const language = useSelector( s => s.language.source );

  const dispatch = useDispatch();

  const getArticles = async () => {
    const articles = await get( 'articles/shorts' );
    setArticlesState( articles.reverse() )
  }

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
    if( isEditorActiveInEditMode ){
      router.push( `/user-panel/administration-panel?page=articles` );
      setEditorActiveInEditMode( false );
    }
    else setEditorActive( !isEditorActive );
    getArticles();
  }

  const handleEditArticleButton = async id => {
    const routingOperation = await router.push( `/user-panel/administration-panel?page=articles&edit=${ id }` );
    if( routingOperation ) setEditorActiveInEditMode( true );
  }

  useEffect(() => {
    const isEdit = router.query.edit;
    if( isEdit ) setEditorActiveInEditMode( true );
    
  }, [])

  return render({
    articles: articlesState,
    deleteArticle,
    handleAddNewArticleButton,
    isEditorActive,
    isEditorActiveInEditMode,
    handleEditArticleButton
  })
}

ArticlesLogicLayer.propTypes = {
  render: PropTypes.func.isRequired,
  articles: PropTypes.array.isRequired
}


export default ArticlesLogicLayer