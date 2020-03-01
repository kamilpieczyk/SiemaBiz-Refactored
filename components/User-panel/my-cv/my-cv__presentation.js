import React from 'react'
import PropTypes, { object } from 'prop-types'
import { useSelector } from 'react-redux'
import Icon from '@material/react-material-icon'

import { Container, MainDetails, Section } from './my-cv__styles'
import Breadcrumbs from '../../UI/breadcrumbs'
import Separator from '../../UI/separator'
import Button from '../../UI/small-button'
import Loading from '../../UI/loading-circle'
import Input from '../../UI/input'

import withClick from '../../HOC/withClick'

const SubmitButton = withClick( Button );

const MyCvPresentationLayer = ({ breadcrumbs, mainInformationInputs, state, setState }) => {

  const language = useSelector( s => s.language.source );

  return(
    <Container id = 'my-cv' >
      <Breadcrumbs
        generalCrumb = { language.userPanel.myCv.title }
        breadcrumbs = { breadcrumbs }
      />

<MainDetails>

  <Separator height = "30px" />
  {
    mainInformationInputs.map(
      ( element, index ) => (
        <>
          <Input 
            key = { index }
            value = { element.value }
            onChange = { element.onChange }
            label = { element.label }
          />
          <Separator height = "20px" />
        </>
      )
    )
  }
               
</MainDetails>


    </Container>
  )
}

MyCvPresentationLayer.propTypes = {
  breadcrumbs: PropTypes.array.isRequired,
  state: PropTypes.object.isRequired,
  mainInformationInputs: PropTypes.array.isRequired,
  setState: PropTypes.object.isRequired
}

export default MyCvPresentationLayer