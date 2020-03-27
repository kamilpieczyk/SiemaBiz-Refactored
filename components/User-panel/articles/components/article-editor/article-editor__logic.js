import { useState, useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'

import apiKey from '../../../../../API/key'
import post from '../../../../../API/post'
import { setPopupWindowActive } from '../../../../../Redux/actions'

const ArticleEditioLogicLayer = ({ render, closeFunction, editMode }) => {

  const [ pictrue, setPictrue ] = useState( null );
  const [ extErr, setExtErr ] = useState( false );
  const [ sizeErr, setSizeErr ] = useState( false );

  const [ articleTitle, setArticleTitle ] = useState( '' );
  const [ articleIntroduction, setArticleIntroduction ] = useState( '' );

  const [ sections, setSections ] = useState( [] );

  const [ isLoading, setLoading ] = useState( false );
  const [ isSavedCopyInLocalStorage, setSavedCopyInLocalStorage ] = useState( false );
  const [ isPictrueErr, setPictrueErr ] = useState( false );
  const [ isArticleTitleErr, setArticleTitleErr ] = useState( false );
  const [ isArticleIntroErr, setArticleIntroErr ] = useState( false );

  const language = useSelector( s => s.language.source );
  const username = useSelector( s => s.user.username );
  const router = useRouter();

  const dispatch = useDispatch();

  const handleDropFiles = useCallback(
    files => {
      const file = files[0];
      const fLength = file.name.length;
      const ext = file.name.slice( fLength - 3, fLength );
      const size = file.size;

      if( ext === 'jpg' && size <= 1511111 ){
        setPictrue( file );
        setSizeErr( false );
        setExtErr( false );
      }
      else if( size > 1511111 ) setSizeErr( true );
      else setExtErr( true );
    }, [],
  )

  const handleInputs = ( name, value, index ) => {
    if( name === 'title' ) setArticleTitle( value );
    else if( name === 'introduction' ) setArticleIntroduction( value );

    else if( name === 'section-title' ){
      const newSections = [ ...sections ];
      newSections[ index ].title = value;
      setSections( newSections );
    }
    else if( name === 'section-content' ){
      const newSections = [ ...sections ];
      newSections[ index ].value = value;
      setSections( newSections );
    }
  }

  const sectionTypes = [
    // types of section available to add by user
    {
      type: "acapit",
      name: language.articlesPanel.articleEditor.sectionTypes.acapit,
      icon: "format_textdirection_l_to_r"
    },
    {
      type: "image",
      name: language.articlesPanel.articleEditor.sectionTypes.image,
      icon: "insert_photo"
    },
    {
      type: "link",
      name: language.articlesPanel.articleEditor.sectionTypes.link,
      icon: "insert_link"
    },
    {
      type: "video",
      name: language.articlesPanel.articleEditor.sectionTypes.video,
      icon: "subscriptions"
    },
  ];

  const handleAddNewSection = ( type, title = "", value = "" ) => {
    // this function is responsible for adding new section to editor
    
    const sectionsArray = [ ...sections ]

    function Section( object ){
      this.type = object.type;
      this.value = object.value;
      this.title = object.title;

      return {
        type: this.type,
        title: this.title,
        value: this.value
      }
    }

    const newSection = new Section({ type, title, value });
    sectionsArray.push( newSection );
    setSections( sectionsArray );
  }

  const saveArticleCopyToLocalStorage = () => {
    window.localStorage.setItem( 'saved-article', JSON.stringify({
      articleTitle,
      articleIntroduction,
      sections
    }));
  }

  const removeSavedArticleCopyFromLocalStorage = () => window.localStorage.removeItem( 'saved-article' );

  const restoreSavedCopyFromLocalStorage = () => {
    const savedCopy = window.localStorage.getItem( 'saved-article' );
    if( savedCopy ){
      const copy = JSON.parse( savedCopy );
      setArticleTitle( copy.articleTitle );
      setArticleIntroduction( copy.articleIntroduction );
      setSections( copy.sections );
    }
  }

  const handleSaveToLocalStorageButton = () => {
    saveArticleCopyToLocalStorage();
    dispatch( setPopupWindowActive({
      title: language.articlesPanel.articleEditor.savePopup.title,
      messenge: language.articlesPanel.articleEditor.savePopup.message
    }) );
    setSavedCopyInLocalStorage( true );
  }

  const checkIfIsSavedCopyInLocalStorage = () => {
    const savedCopy = window.localStorage.getItem( 'saved-article' );
    if( savedCopy ) setSavedCopyInLocalStorage( true );
  }

  const handdleUpdateArticleButton = async () => {
    setLoading( true );
    const date = new Date();
    const id = router.query.edit;
    const newSections = [ ...sections ];
    newSections.push({
      type: 'edit',
      value: `edited by ${ username } ${ date.getUTCDate() }/${ date.getMonth() +1 }/${ date.getFullYear() } at ${ date.getHours() }:${ date.getMinutes() }`,
      title: ''
    });
    const data = await post( 'update-article', {
      id,
      title: articleTitle,
      introduction: articleIntroduction,
      sections: newSections
    } );
    if( data.status === 'ok' ){
      setLoading( false );
      closeFunction();
    }
  }

  const handleAddArticleButton = async () => {
    let pictrueExt = pictrue ? pictrue.name.slice( pictrue.name.length - 3, pictrue.name.length ) : null;

    setLoading( true );
    if( isPictrueErr ) setPictrueErr( false );
    if( isArticleTitleErr ) setArticleTitleErr( false );
    if( isArticleIntroErr ) setArticleIntroErr( false );

    if( !pictrue || pictrueExt !== 'jpg' || pictrue.size > 1511111 ){
      setPictrueErr( true );
      setLoading( false );
      if( !articleTitle ) setArticleTitleErr( true );
      if ( !articleIntroduction ) setArticleIntroErr( true );
    }
    else if( !articleTitle ){
      setArticleTitleErr( true );
      setLoading( false );
      if ( !articleIntroduction ) setArticleIntroErr( true );
    }
    else if( !articleIntroduction ){
      setArticleIntroErr( true );
      setLoading( false );
    }
    else{
      saveArticleCopyToLocalStorage();
      const bodyToPost = new FormData();
      bodyToPost.append( 'image', pictrue );
      bodyToPost.append( 'title', articleTitle );
      bodyToPost.append( 'introduction', articleIntroduction );
      bodyToPost.append( 'author', username );
      bodyToPost.append( 'sections', JSON.stringify( sections ) );

      try{
        const data = await fetch( `${ apiKey }add-new-article`, {
          method: 'post',
          body: bodyToPost
        } );
        const res = await data.json();
        const status = res.status;
        if( status === 'ok' ){
          closeFunction();
          removeSavedArticleCopyFromLocalStorage();
        }
      }
      catch( err ){
        setLoading( false );
        console.error( err );
        dispatch( setPopupWindowActive({ 
          title: language.general.popups.wrong.title,
          messenge: language.general.popups.wrong.messenge
        }) );
      }
    }
  }

  const getArticleToEditInEditMode = async() => {
    if( editMode ){
      const id = router.query.edit;
      const data = await post( 'get-article', { id } );
      if( data.status === 'ok' ){
        const article = data.article;
        setArticleTitle( article.title );
        setArticleIntroduction( article.introduction );
        setSections( article.sections );
        setPictrue( { name: article.mainImage } );
      }
    }
  }

  useEffect(
    () => {
      getArticleToEditInEditMode();
      checkIfIsSavedCopyInLocalStorage();
    }, []
  );

  return render({
    state: {
      pictrue,
      extErr,
      sizeErr,
      articleTitle,
      articleIntroduction,
      sections,
      isLoading,
      isPictrueErr,
      isArticleTitleErr,
      isArticleIntroErr,
      isSavedCopyInLocalStorage
    },
    handleDropFiles,
    handleInputs,
    sectionTypes,
    handleAddNewSection,
    handleAddArticleButton,
    handdleUpdateArticleButton,
    handleSaveToLocalStorageButton,
    restoreSavedCopyFromLocalStorage
  })
}

ArticleEditioLogicLayer.propTypes = {
  render: PropTypes.func.isRequired,
  closeFunction: PropTypes.func.isRequired,
  editMode: PropTypes.bool
}

export default ArticleEditioLogicLayer