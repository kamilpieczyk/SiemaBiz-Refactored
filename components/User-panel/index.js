import React from 'react'
import PropTypes from 'prop-types'

import LogicLayer from './user-panel__logic'
import PresentationLayer from './user-panel__presentation'

const UserPanel = ({ menu, children }) => (
  <LogicLayer
    menu = { menu } 
    render = { props => (
      <PresentationLayer { ...props } >
        { children }
      </PresentationLayer>
    ) }
  />
)

UserPanel.propTypes = {
  children: PropTypes.node,
  menu: PropTypes.array.isRequired
}

export default UserPanel