import React, { useState } from 'react'
import PropTypes from 'prop-types'
import MaterialIcon from '@material/react-material-icon'

import {
  Container,
  MainField,
  Button,
  Fields,
  Field
} from './choose-input__styles'

const ChooseInput = ({ fields, choosenFieldIndex, onChange }) => {

  const [ isActive, setActive ] = useState( false );

  return(
    <Container>
      <MainField>{ fields[ choosenFieldIndex ] }</MainField>
      <Button onClick = { () => setActive( !isActive ) } >
        <MaterialIcon icon = { isActive ? 'keyboard_arrow_up' : 'keyboard_arrow_down' } />
      </Button>
      <Fields active = { isActive } >
        {
          fields.map(
            ( field, index ) => (
              <Field
                key = { index }
                onClick = { () => {
                  onChange( field );
                  setActive( false );
                } }
              >
                { field }
              </Field>
            )
          )
        }
      </Fields>
    </Container>
  )
}

ChooseInput.propTypes = {
  fields: PropTypes.array.isRequired,
  choosenFieldIndex: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
}

export default ChooseInput;