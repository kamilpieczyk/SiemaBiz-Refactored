import React from 'react'
import PropTypes from 'prop-types'

import Logic from './add-company-window__Logic'
import PresentationLayer from './add-company-window__presentation'

const AddCompanyWindow = props => (
  <Logic
    { ...props }
    render = { newProps => <PresentationLayer { ...newProps } close = { props.close }/> }
  />
)

AddCompanyWindow.propTypes = {
  close: PropTypes.func.isRequired
}

export default AddCompanyWindow;