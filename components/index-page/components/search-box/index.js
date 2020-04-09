import React from 'react'
import PropTypes from 'prop-types'

import LogicLayer from './searchBox__logic'
import PresentationLayer from './searchBox__presentation'

const SearchBox = props => (
  <LogicLayer>
    {
      newProps => <PresentationLayer { ...newProps } />
    }
  </LogicLayer>
)

export default SearchBox;