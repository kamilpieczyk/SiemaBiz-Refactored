import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import MaterialIcon from '@material/react-material-icon'

import { Button } from './delete-button__styles'

const DeleteButton = ({ color, onClick }) => {

  const language = useSelector( s => s.language.source );

  return (
    <Button color = { color } onClick = { onClick }>
      <MaterialIcon icon = 'delete_forever' />
      <div>{ language.general.delete }</div>
    </Button>
  )
}

DeleteButton.propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func
}

export default DeleteButton