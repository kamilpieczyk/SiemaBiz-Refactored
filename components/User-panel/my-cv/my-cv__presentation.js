import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import Icon from '@material/react-material-icon'

import { Container } from './my-cv__styles'
import Breadcrumbs from '../../UI/breadcrumbs'
import Separator from '../../UI/separator'
import Button from '../../UI/small-button'
import Loading from '../../UI/loading-circle'
import { main } from '../../../styles/colors'

import withClick from '../../HOC/withClick'

const SubmitButton = withClick( Button );

const MyCvPresentationLayer = ({ breadcrumbs }) => {

  const language = useSelector( s => s.language.source );

  return(
    <Container>
      <Breadcrumbs
        generalCrumb = { language.userPanel.myCv.title }
        breadcrumbs = { breadcrumbs }
      />
    </Container>
  )
}

MyCvPresentationLayer.propTypes = {
  breadcrumbs: PropTypes.array.isRequired,
}

export default MyCvPresentationLayer