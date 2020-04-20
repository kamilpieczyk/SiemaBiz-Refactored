import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import apiKey from '../../../../../API/key'
import Button from '../../../../UI/small-button'
import withClick from '../../../../HOC/withClick'

import { 
  Container,
} from './company__styles'

const ClickButton = withClick( Button );

const Company = ({
  name,
  logo,
  city,
  id,
  owners,
  employees,
  handlers
}) => {

  const language = useSelector( s => s.language.source );

  return(
    <Container>
      <img src = { `${ apiKey }uploads/logos/${ logo }` } width = '100' max-height = '100%' />
      <div>{ name }</div>
      <div>{ city }</div>
      <ClickButton thin onClickFunction = { () => handlers.handleEmployeeListButton( owners, employees ) }>
        { language.companyPanel.manageEmployeeButton }
      </ClickButton>
    </Container>
  )
}

Company.propTypes = {
  name: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  owners: PropTypes.string.isRequired,
  employees: PropTypes.string.isRequired,
  handlers: PropTypes.shape({
    handleEmployeeListButton: PropTypes.func.isRequired
  }).isRequired
}

export default Company;