import React from 'react'
import PropTypes from 'prop-types'
import MaterialIcon from '@material/react-material-icon'

import { Button } from './close-button__styles'

const DeleteButton = ({ color }) => {
  return (
    <Button color = { color }>
      <MaterialIcon icon = 'close' />
    </Button>
  )
}

DeleteButton.propTypes = {
  color: PropTypes.string
}

export default DeleteButton