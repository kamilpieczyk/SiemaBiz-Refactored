import React from 'react'
import PropTypes from 'prop-types'

import {
  Container,
  Content,
  Introduction,
  ContentContainer,
  Sidebar,
  Paragraph,
  ImageSection
} from './article__styles'

import MainImageBox from './components/main-image-box'
import Image from '../UI/image'
import Url from '../UI/url'
import YtVideo from '../UI/yt-video'


const ArticlePresentationLayer = ({ article }) => {
  console.log( article );
  return(
    <Container>
      <MainImageBox
        image = { article.mainImage }
        title = { article.title }
        author = { article.author }
        date = { article.date }
      />
      <ContentContainer>
        <Content>
          <Introduction>
            { article.introduction }
          </Introduction>
          {
            article.sections.map( ( section, index ) => {
              if( section.type === 'acapit' ) return (
                <Paragraph key = { index }>
                  <h2>{ section.title }</h2>
                  <p>{ section.value }</p>
                </Paragraph>
              )
              else if( section.type === 'image' ) return (
                <ImageSection key = { index }>
                  <Image url = { section.value } title = { section.title } />
                </ImageSection>
              )
              else if( section.type === 'link' ) return (
                <ImageSection key = { index }>
                  <Url url = { section.value } title = { section.title } />
                </ImageSection>
              )
              else if( section.type === 'video' ) return (
                <ImageSection key = { index }>
                  <YtVideo title = { section.title } id = { section.value } />
                </ImageSection>
              )
            } )
          }
        </Content>
        <Sidebar>

        </Sidebar>
      </ContentContainer>
    </Container>
  )
}

ArticlePresentationLayer.propTypes = {
  article: PropTypes.object.isRequired,

}

export default ArticlePresentationLayer;