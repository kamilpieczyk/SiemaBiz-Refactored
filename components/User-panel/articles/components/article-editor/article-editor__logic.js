import { useState, useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

const ArticleEditioLogicLayer = ({ render }) => {

  const [ pictrue, setPictrue ] = useState( null );
  const [ extErr, setExtErr ] = useState( false );
  const [ sizeErr, setSizeErr ] = useState( false );

  const [ articleTitle, setArticleTitle ] = useState( '' );
  const [ articleIntroduction, setArticleIntroduction ] = useState( '' );

  const [ sections, setSections ] = useState( [] );

  const language = useSelector( s => s.language.source );

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
    setSections( sectionsArray )
  }

  return render({
    state: {
      pictrue,
      extErr,
      sizeErr,
      articleTitle,
      articleIntroduction,
      sections
    },
    handleDropFiles,
    handleInputs,
    sectionTypes,
    handleAddNewSection
  })
}

ArticleEditioLogicLayer.propTypes = {
  render: PropTypes.func.isRequired
}

export default ArticleEditioLogicLayer