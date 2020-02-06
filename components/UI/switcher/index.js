import React from 'react'
import Logic from './switcher__logic'
import Presentation from './switcher__presentation'
import PropTypes from 'prop-types'

const Switcher = ({ text }) => (
  <Logic
    text = { text }
    render = { props => <Presentation { ...props } /> }
  />
)

Switcher.propTypes = {
  text: PropTypes.string.isRequired
}

export default Switcher