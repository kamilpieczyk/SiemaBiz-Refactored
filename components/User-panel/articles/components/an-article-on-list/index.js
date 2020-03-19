import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import MaterialIcon from '@material/react-material-icon'

import { Container, Element, Lp, ButtonContainer } from './an-article-on-list__styles'
import Separator from '../../../../UI/separator'
import DeleteButton from '../../../../UI/delete-button'
import EditButton from '../../../../UI/edit-button'

import withClick from '../../../../HOC/withClick'

const Delete = withClick( DeleteButton );

const AnArticleOnList = ({ lp, title, author, date, deleteFunction }) => {

  const language = useSelector( s => s.language.source );

  return(
    <>
      <Container>
        <Lp>{ lp }</Lp>
        <Element>
          <MaterialIcon icon = 'title' />
          { title }
        </Element>
        <Element dontDisplay>
          <MaterialIcon icon = 'date_range' />
          { date }
        </Element>
        <Element>
          <MaterialIcon icon = 'person' />
          { author }
        </Element>
        <ButtonContainer>
          <EditButton />
          <Separator width = '20px' />
          <Delete onClickFunction = { deleteFunction } />
        </ButtonContainer>
      </Container>
      <Separator height = '20px' />
    </>
  )
}

AnArticleOnList.propTypes = {

}

export default AnArticleOnList