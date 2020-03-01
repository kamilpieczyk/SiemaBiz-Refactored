import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Container, Inp, Label } from './input__styles'

const Input = ({ label, value, onChange }) => {

  const [ isFocused, setFocused ] = useState( false );

  return(
    <Container focus = { isFocused } >
      <Label
        focus = { isFocused }
      >
        { label }
      </Label>
      <Inp
        value = { value }
        onChange = { onChange }
        placeholder = { label }
        onBlur = { () => setFocused( false ) }
        onFocus = { () => setFocused( true ) }
        focus = { isFocused }
      />
    </Container>
  )
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Input