import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import MaterialIcon from '@material/react-material-icon'
import Link from 'next/link'

import Button from '../../UI/small-button'
import Company from './components/company'
import witchClick from '../../HOC/withClick'
import Window from '../../UI/window'
import Separator from '../../UI/separator'
import LoadingCircle from '../../UI/loading-circle'
import { main } from '../../../styles/colors'

import {
  Container,
  ButtonsContainer,
  CompaniesContainer,
  EmployeesContainer,
  EmployeeBox,
  CompanieContentContainer,
  JobAdBox,
  Warning
} from './company-management__styles'

const ClickButton = witchClick( Button );

const CompanyManagementPresentation = ({ state, handlers }) => {
  const language = useSelector( s => s.language.source.companyPanel );
  
  return(
    <Container>
      { //MANAGE EMPLOYEE WINDOW
        state.employeesWindow.isActive && (
          <Window close = { handlers.handleEmployeeListButton } width = '80%'>
            <EmployeesContainer>
              <h1>{ language.owners }</h1>
              <section>
                { state.employeesWindow.owners.map( owner => (
                  <EmployeeBox key = { owner }>
                    <Link href = {{ pathname: '/user', query: { username: owner } }} ><a>{ owner }</a></Link>
                    <MaterialIcon
                      icon = 'remove_circle'
                      title = { language.removeOwner }
                      onClick = { () => handlers.handleRemoveOwnerButton( owner, state.employeesWindow.company ) }
                    />
                  </EmployeeBox>
                )) }
              </section>
            </EmployeesContainer>
            <EmployeesContainer white>
              <h1>{ language.employeeList }</h1>
              <section>
                {state.employeesWindow.employees.map( employee => (
                  <EmployeeBox white key = { employee }>
                    <Link href = {{ pathname: '/user', query: { username: employee } }} ><a>{ employee }</a></Link>
                    <div>
                      <MaterialIcon
                        icon = 'vertical_align_top'
                        title = { language.addOwner }
                        onClick = { () => handlers.handleAddOwnerButton( employee, state.employeesWindow.company ) }
                      />
                      <MaterialIcon
                        icon = 'delete'
                        title = { language.deleteFromCompany }
                        onClick = { () => handlers.handleRemoveEmployeeButton( employee, state.employeesWindow.company ) }
                      />
                    </div>
                  </EmployeeBox>
                ))}
              </section>
            </EmployeesContainer>
          </Window>
        )
      }
      {/* ACTION BUTTONS AT THE TOP OF SITE */}
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
          state.companies?.map(
            ( company, index ) => (
              <React.Fragment>
                <Company key = { company._id }
                  name = { company.name }
                  logo = { company.logo }
                  city = { company.city }
                  id = { company._id }
                  owners = { company.owners }
                  employees = { company.employees }
                  handlers = { handlers }
                  isLoading = { state.isLoading }
                />

                { // JOB ADs
                  state.jobAdsWindow.isActive && company._id === state.jobAdsWindow.companyID && (
                    <CompanieContentContainer>
                      {
                        state.jobAdsWindow.jobAds?.map(
                          jobAd => (
                            <JobAdBox key = { jobAd._id }>
                              
                              {
                                state.isArchiviseActive.bool && state.isArchiviseActive.id === jobAd._id
                                  // show if archivise icon has been clicked
                                  ? state.isLoading.archivise // show if 'yes' button has been clicked (loading)
                                    ? <LoadingCircle text = { language.isLoadingArchivise } color = { main } />
                                    :(
                                      <React.Fragment>
                                        <p>{ language.archiviseQuestion }</p>
                                        <ClickButton onClickFunction = { () => handlers.handleArchiviseJobAd( jobAd._id )() }>
                                          { language.archivise }
                                        </ClickButton>
                                        <ClickButton onClickFunction = { () => handlers.handleArchiviseJobAd( null, true ) }>
                                          { language.cancel }
                                        </ClickButton>
                                      </React.Fragment>
                                    )
                                    // show ad
                                  :(
                                    <React.Fragment>
                                      <div>
                                        <p>{ jobAd.industry } - { jobAd.title }</p>
                                        <p>{ jobAd.city }</p>
                                      </div>
                                      <section>
                                        <MaterialIcon
                                          icon = 'assignment_ind'
                                          title = { language.cv }
                                        />
                                        <MaterialIcon
                                          icon = 'edit'
                                          title = { language.edit }
                                        />
                                        <MaterialIcon
                                          icon = 'archive'
                                          title = { language.archivise }
                                          onClick = { () => handlers.handleArchiviseJobAd( jobAd._id ) }
                                        />
                                      </section>
                                    </React.Fragment>
                                  )
                              }
                            </JobAdBox>
                          )
                        )
                      }

                      { // SHOW THIS INFO IF THERE IS NO JOB ADs TO SHOW
                        state.jobAdsWindow.jobAds.length === 0 && (
                          <Warning>{ language.nothingToShow }</Warning>
                        )
                      }

                      <Separator height = '20px' />
                      {/* FOLD JOB ADs BUTTON */}
                      <ClickButton
                        onClickFunction = { () => handlers.handleManageJobAdsButton( null , true ) }
                        maxWidth
                      >
                        <MaterialIcon icon = 'keyboard_arrow_up' />
                        { language.fold }
                      </ClickButton>

                    </CompanieContentContainer>
                  )
                }

              </React.Fragment>
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
      owners: PropTypes.array,
      company: PropTypes.string
    }),
    jobAdsWindow: PropTypes.shape({
      isActive: PropTypes.bool,
      companyID: PropTypes.string
    }),
    isLoading: PropTypes.shape({
      deleteCompany: PropTypes.bool,
      archivise: PropTypes.bool
    }),
    isArchiviseActive: PropTypes.shape({
      bool: PropTypes.bool,
      id: PropTypes.string
    })
  }),
  handlers: PropTypes.shape({
    handleEmployeeListButton: PropTypes.func.isRequired,
    handleAddOwnerButton: PropTypes.func.isRequired,
    handleRemoveOwnerButton: PropTypes.func.isRequired,
    handleRemoveEmployeeButton: PropTypes.func.isRequired,
    handleDeleteCompanyButton: PropTypes.func.isRequired,
    handleManageJobAdsButton: PropTypes.func.isRequired,
    handleArchiviseJobAd: PropTypes.func.isActive
  })
}

export default CompanyManagementPresentation;