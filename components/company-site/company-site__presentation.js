import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import {
  Container
} from './company-site__styles'

const CompanySitePresentation = ({ company }) => {
  
  return(
    <Container>

    </Container>
  )
}

CompanySitePresentation.propTypes = {
  company: PropTypes.shape({
    owners: PropTypes.array.isRequired,
    employees: PropTypes.array.isRequired,
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    adress: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    industry: PropTypes.string.isRequired,
  })
}

export default CompanySitePresentation;