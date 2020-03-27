import React from "react"
import PropTypes, { bool } from 'prop-types'
import { useSelector } from "react-redux"
import MaterialIcon from '@material/react-material-icon'

import { SectionContainer } from '../user-panel__styles'
import { AddButtonContainer } from './articles__styles'
import Separator from '../../UI/separator'
import Breadcrumbs from '../../UI/breadcrumbs'
import Article from './components/an-article-on-list'
import Button from '../../UI/small-button'
import ArticleEditor from './components/article-editor'

import withClick from '../../HOC/withClick'

const AddNewArticleButton = withClick( Button );

const ArticlesPresentationLayer =  ( {
  articles,
  deleteArticle,
  handleAddNewArticleButton,
  isEditorActive,
  isEditorActiveInEditMode,
  handleEditArticleButton
 } ) => {
  const language = useSelector( s => s.language.source );
  const device = useSelector( s => s.deviceScreen );

  return(
    <React.Fragment>
      <SectionContainer>
        <Breadcrumbs 
          generalCrumb = { language.articlesPanel.articlesList.title }
          breadcrumbs = {[ language.articlesPanel.title ]}
        />

        <Separator height = '20px' />

        <AddButtonContainer>
          <AddNewArticleButton 
            onClickFunction = { handleAddNewArticleButton }
            maxWidth = { device === 'mobile' ? true : false }
          >
            <MaterialIcon icon = 'add_circle'/>
            <Separator width = '5px' />
            { language.articlesPanel.addButton }
          </AddNewArticleButton>
        
        </AddButtonContainer>
        <Separator height = '10px' />

        {
          articles.length > 0 && articles.map( ( article, index ) => (
            <Article
              key = { article._id }
              title = { article.title }
              author = { article.author }
              date = { article.date }
              lp = { index + 1 }
              deleteFunction = { () => deleteArticle( article._id ) }
              editFunction = { () => handleEditArticleButton( article._id ) }
            />
          ) )
        }

      </SectionContainer>
      { isEditorActive && <ArticleEditor closeFunction = { handleAddNewArticleButton }/> }
      { isEditorActiveInEditMode && <ArticleEditor editMode closeFunction = { handleAddNewArticleButton }/> }
    </React.Fragment>
  )
}

ArticlesPresentationLayer.propTypes = {
  articles: PropTypes.array,
  deleteArticle: PropTypes.func.isRequired,
  handleAddNewArticleButton: PropTypes.func.isRequired,
  isEditorActive: bool,
  handleEditArticleButton: PropTypes.func.isRequired,
  isEditorActiveInEditMode: PropTypes.bool
}

export default ArticlesPresentationLayer