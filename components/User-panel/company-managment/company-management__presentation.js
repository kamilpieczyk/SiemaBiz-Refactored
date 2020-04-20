import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import MaterialIcon from '@material/react-material-icon'
import Link from 'next/link'

import Button from '../../UI/small-button'
import Company from './components/company'
import witchClick from '../../HOC/withClick'
import Window from '../../UI/window'

import {
  Container,
  ButtonsContainer,
  CompaniesContainer,
  EmployeesContainer,
  EmployeeBox
} from './company-management__styles'

const ClickButton = witchClick( Button );

const CompanyManagementPresentation = ({ state, handlers }) => {
  const language = useSelector( s => s.language.source.companyPanel );
  
  return(
    <Container>
      {
        state.employeesWindow.isActive && (
          <Window close = { handlers.handleEmployeeListButton } width = '60%'>
            <EmployeesContainer>
              <h1>{ language.owners }</h1>
              <section>
                {state.employeesWindow.owners.map( owner => (
                  <EmployeeBox key = { owner }>
                    <Link href = {{ pathname: '/user', query: { username: owner } }} ><a>{ owner }</a></Link>
                    <MaterialIcon icon = 'vertical_align_bottom' />
                  </EmployeeBox>
                ))}
              </section>
            </EmployeesContainer>
            <EmployeesContainer white>
              <h1>{ language.employeeList }</h1>
              <section>
                {state.employeesWindow.employees.map( employee => (
                  <EmployeeBox white key = { employee }>
                    <Link href = {{ pathname: '/user', query: { username: employee } }} ><a>{ employee }</a></Link>
                    <div>
                      <MaterialIcon icon = 'vertical_align_top' />
                      <MaterialIcon icon = 'delete' />
                    </div>
                  </EmployeeBox>
                ))}
              </section>
            </EmployeesContainer>
          </Window>
        )
      }
      <ButtonsContainer>
        <ClickButton onClickFunction = { () => {} }>
          <MaterialIcon icon = 'work' />
          { language.addCompanyButton }
        </ClickButton>
        <ClickButton onClickFunction = { () => {} }>
          <MaterialIcon icon = 'pageview' />
          { language.searchForCompanyButton }
        </ClickButton>
      </ButtonsContainer>
      <CompaniesContainer>
        {
          state.companies && state.companies.map(
            ( company, index ) => (
              <Company key = { company._id }
                name = { company.name }
                logo = { company.logo }
                city = { company.city }
                id = { company._id }
                owners = { company.owners }
                employees = { company.employees }
                handlers = { handlers }
              />
            )
          )
        }
      </CompaniesContainer>
    </Container>
  )
}

CompanyManagementPresentation.propTypes = {
  state: PropTypes.shape({
    companies: PropTypes.arrayOf( PropTypes.shape({
      owners: PropTypes.arrayOf( PropTypes.string ),
      employees: PropTypes.arrayOf( PropTypes.string ),
      _id: PropTypes.string,
      name: PropTypes.string,
      logo: PropTypes.string,
      adress: PropTypes.string,
      city: PropTypes.string,
      description: PropTypes.string,
      industry: PropTypes.string,
      phone: PropTypes.string,
      website: PropTypes.string,
    }) ),
    employers: PropTypes.arrayOf( PropTypes.shape({
      owners: PropTypes.arrayOf( PropTypes.string ),
      employees: PropTypes.arrayOf( PropTypes.string ),
      _id: PropTypes.string,
      name: PropTypes.string,
      logo: PropTypes.string,
      adress: PropTypes.string,
      city: PropTypes.string,
      description: PropTypes.string,
      industry: PropTypes.string,
      phone: PropTypes.string,
      website: PropTypes.string,
    }) ),
    employeesWindow: PropTypes.shape({
      isActive: PropTypes.bool,
      employees: PropTypes.array,
      owners: PropTypes.array
    }),
  }),
  handlers: PropTypes.shape({
    handleEmployeeListButton: PropTypes.func.isRequired
  })
}

export default CompanyManagementPresentation;