import React from 'react'
import PropTypes from 'prop-types'

import { Container, ContentContainer, Sidebar } from './articles__styles'
import MainArticle from './main-article'
import ArticlesContentContainer from '../UI/article-content-container'
import SidebarBox from '../UI/sidebar-box'
import articleCats from '../../data/article-categories'

const ArticlesPresentationLayer = ({ articles }) => {
  const mainArticles = [ ...articles.slice( 0, 3) ];
  return(
    <Container>
      <MainArticle articles = { mainArticles } />
      <ContentContainer>
        <ArticlesContentContainer articles = { articles }/>
        <Sidebar>
          <SidebarBox menu = { articleCats() }/>
        </Sidebar>
      </ContentContainer>
    </Container>
  )
}

ArticlesPresentationLayer.propTypes = {
  articles: PropTypes.array.isRequired,
}

export default ArticlesPresentationLayer;