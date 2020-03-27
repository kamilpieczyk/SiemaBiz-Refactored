import React from 'react'
import PropTypes from 'prop-types'
import MaterialIcon from '@material/react-material-icon'

import { Container } from './error-info__styles'

const ErrorInfo = ({ children }) => {

  return(
    <Container>
      <MaterialIcon icon = 'error' />
      { children }
    </Container>
  )
}

ErrorInfo.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ErrorInfo