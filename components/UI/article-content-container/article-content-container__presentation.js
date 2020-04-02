import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

import { Container, Sites, Site, ArticlesContainer } from './article-content-container__styles'
import ArticleBox from '../article-box'

const ArticleContentContainerPresentationLayer = ({ articles, sites, state, handlers }) => {


  return(
    <Container>
      <ArticlesContainer>
        {
          articles.map( article => (
            <ArticleBox key = { article._id }
              article = { article }
            />
          ) )
        }
      </ArticlesContainer>

      <Sites>
        {
          sites.map( ( site, index ) => (
            <Link href = {{ query: { site } }}>
              <Site
                key = { index }
                current = { state.currentSite == site ? true : false }
              >
                { site }
              </Site>
            </Link>
          ) )
        }
      </Sites>
    </Container>
  )
}

ArticleContentContainerPresentationLayer.propTypes = {
  articles: PropTypes.array.isRequired,
  sites: PropTypes.array.isRequired,
  state: PropTypes.shape({
    currentSite: PropTypes.string.isRequired
  }),
  handlers: PropTypes.object.isRequired
}

export default ArticleContentContainerPresentationLayer;