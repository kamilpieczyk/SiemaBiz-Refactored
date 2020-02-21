import React from 'react'
import PropTypes from 'prop-types'

import LogicLayer from './user-panel__logic'
import PresentationLayer from './user-panel__presentation'

const UserPanel = ({ children }) => (
  <LogicLayer
    render = { props => (
      <PresentationLayer { ...props } >
        { children }
      </PresentationLayer>
    ) }
  />
)

UserPanel.propTypes = {
  children: PropTypes.element
}

export default UserPanel