import React from 'react'
import PropTypes from 'prop-types'

import LogicLayer from './company-management__logic'
import PresentationLayer from './company-management__presentation'

const CompanyManagement = props => (
  <LogicLayer
    { ...props }
    render = {
      newProps => <PresentationLayer { ...newProps } />
    }
  />
)

CompanyManagement.propTypes = {

}

export default CompanyManagement;