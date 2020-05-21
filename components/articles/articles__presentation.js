import React from 'react'
import PropTypes from 'prop-types'

import { Container, ContentContainer, Sidebar } from './articles__styles'
import MainArticle from './main-article'
import ArticlesContentContainer from '../UI/article-content-container'
import SidebarBox from '../UI/sidebar-box'
import Separator from '../UI/separator'

const ArticlesPresentationLayer = ({ articles, sidebar }) => {
  const mainArticles = [ ...articles.slice( 0, 3) ];
  return(
    <Container>
      {/* <MainArticle articles = { mainArticles } /> */}
      <Separator height = '120px' />
      <ContentContainer>
        <ArticlesContentContainer articles = { articles }/>
        <Sidebar>
          <SidebarBox light menu = { sidebar }/>
        </Sidebar>
      </ContentContainer>
    </Container>
  )
}

ArticlesPresentationLayer.propTypes = {
  articles: PropTypes.array.isRequired,
  sidebar: PropTypes.array.isRequired
}

export default ArticlesPresentationLayer;