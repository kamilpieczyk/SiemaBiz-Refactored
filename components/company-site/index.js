import React from 'react'
import PropTypes from 'prop-types'

import LogicLayer from './company-site__logic'
import PresentationLayer from './company-site__presentation'

const CompanySite = ( props ) => (
  <LogicLayer
    { ...props }
    render = { newProps => <PresentationLayer company = { props.company } { ...newProps }/> }
  />
)

CompanySite.propTypes = {
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

export default CompanySite;