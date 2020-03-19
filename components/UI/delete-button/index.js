import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import MaterialIcon from '@material/react-material-icon'

import { Button } from './delete-button__styles'

const DeleteButton = ({ color }) => {

  const language = useSelector( s => s.language.source );

  return (
    <Button color = { color }>
      <MaterialIcon icon = 'delete_forever' />
      <div>{ language.general.delete }</div>
    </Button>
  )
}

DeleteButton.propTypes = {
  color: PropTypes.string
}

export default DeleteButton