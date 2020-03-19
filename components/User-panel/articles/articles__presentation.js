import React from "react"
import PropTypes from 'prop-types'
import { useSelector } from "react-redux"

import { SectionContainer } from '../user-panel__styles'
import Separator from '../../UI/separator'
import Breadcrumbs from '../../UI/breadcrumbs'
import Article from './components/an-article-on-list'

const ArticlesPresentationLayer =  ( { articles, deleteArticle } ) => {
  const language = useSelector( s => s.language.source );

  return(
    <SectionContainer>
      <Breadcrumbs 
        generalCrumb = { language.articlesPanel.articlesList.title }
        breadcrumbs = {[ language.articlesPanel.title ]}
      />
      <Separator height = '20px' />
      {
        articles.length > 0 && articles.map( ( article, index ) => (
          <Article
            key = { article._id }
            title = { article.title }
            author = { article.author }
            date = { article.date }
            lp = { index + 1 }
            deleteFunction = { () => deleteArticle( article._id ) }
          />
        ) )
      }

    </SectionContainer>
  )
}

ArticlesPresentationLayer.propTypes = {
  articles: PropTypes.array,
  deleteArticle: PropTypes.func.isRequired
}

export default ArticlesPresentationLayer