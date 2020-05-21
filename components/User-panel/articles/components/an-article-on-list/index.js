import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import MaterialIcon from '@material/react-material-icon'

import { Container, Element, Lp, ButtonContainer } from './an-article-on-list__styles'
import Separator from '../../../../UI/separator'
import DeleteButton from '../../../../UI/delete-button'
import EditButton from '../../../../UI/edit-button'
import { main } from '../../../../../styles/colors'

import withClick from '../../../../HOC/withClick'

const Delete = withClick( DeleteButton );
const Edit = withClick( EditButton );

const AnArticleOnList = ({ lp, title, author, date, deleteFunction, editFunction }) => {

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
          <Edit color = { main } onClickFunction = { editFunction } />
          <Separator width = '20px' />
          <Delete color = { main } onClickFunction = { deleteFunction } />
        </ButtonContainer>
      </Container>
      <Separator height = '20px' />
    </>
  )
}

AnArticleOnList.propTypes = {
  lp: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  deleteFunction: PropTypes.func.isRequired,
  editFunction: PropTypes.func.isRequired
}

export default AnArticleOnList