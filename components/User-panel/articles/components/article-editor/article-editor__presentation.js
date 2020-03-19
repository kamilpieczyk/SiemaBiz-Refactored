import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import { Container, Topbar } from './article-editor__styles'
import CloseButton from '../../../../UI/close-button'
import separator from '../../../../UI/separator'
import Separator from '../../../../UI/separator'

import withClick from '../../../../HOC/withClick'

const Close = withClick( CloseButton );

const ArticleEditorPresentationLayer = ({ closeFunction }) => {
  const language = useSelector( s => s.language.source );

  return(
    <Container>
      <Topbar>
        { language.articlesPanel.articleEditor.newArticleTitle }
        <Separator width = '45%' />
        <Close onClickFunction = { closeFunction }/>
      </Topbar>
    </Container>
  )
}

ArticleEditorPresentationLayer.propTypes = {
  closeFunction: PropTypes.func.isRequired
}

export default ArticleEditorPresentationLayer