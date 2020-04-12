import React from 'react'
import PropTypes from 'prop-types'

import LogicLayer from './companies-content-container__logic'
import PresentationLayer from './companies-content-container__presentation'

const CompaniesContentContainer = ({ companies }) => (
  <LogicLayer
    companies = { companies }
    render = { props => <PresentationLayer { ...props } />}
  />
)

CompaniesContentContainer.propTypes = {
  companies: PropTypes.array.isRequired
}

export default CompaniesContentContainer;