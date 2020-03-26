import React from 'react'
import PropTypes from 'prop-types'
import Icon from '@material/react-material-icon'

import { Button } from './section-button__styles'

const SectionButton = ({ children, icon, onClick }) => {
  return(
    <Button onClick = { onClick }>
      <Icon icon = { icon } />
      { children }
    </Button>
  )
}

SectionButton.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default SectionButton