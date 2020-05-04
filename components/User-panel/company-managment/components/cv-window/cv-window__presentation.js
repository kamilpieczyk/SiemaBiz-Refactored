import React from 'react'
import PropTypes, { array, arrayOf } from 'prop-types'
import { useSelector } from 'react-redux'
import MaterialIcon from '@material/react-material-icon';


import Window from '../../../../UI/window'
import Loading from '../../../../UI/loading-circle'
import { main } from '../../../../../styles/colors'
import ButtonUI from '../../../../UI/small-button'
import witchClick from '../../../../HOC/withClick'

import {
  Container,
  LoadingBox,
  CVBox,
  MainInformation,
  CvSectionsContainer,
  CvSection,
  CvSectionItem,
  CvSectionItemSmall,
  NavButtonsContainer
} from './cv-window__styles'

const Button = witchClick( ButtonUI );

const CvWindow = ({ close, state, handleCvNavButtons }) => {

  const language = useSelector( s => s.language.source.companyPanel.cvWindow );
  const cv = state.cvs[ state.shownCvNo ];
  
  return(
    <Window width = '100%' close = { () => close() }>
      <NavButtonsContainer>
        <MaterialIcon
          icon = 'arrow_back_ios'
          onClick = { () => handleCvNavButtons( 'prev' ) }
          title = { language.back }
        />
        <MaterialIcon
          icon = 'arrow_forward_ios'
          onClick = { () => handleCvNavButtons( 'next' ) }
          title = { language.forward }
        />
        <Button
          onClickFunction = { () => console.log( 'print' ) }
          thin
        >
          <MaterialIcon icon = 'print' />
          { language.print }
        </Button>
      </NavButtonsContainer>
      <Container>
        {
          state.isLoading ? <LoadingBox><Loading text = { language.loading } color = { main }/></LoadingBox>
          : (
            <React.Fragment>
              {
                state.cvs.length === 0 ? <LoadingBox>{ language.noApplications }</LoadingBox>
                :<CVBox>
                  <MainInformation>
                    <div>
                      <MaterialIcon icon = 'assignment_ind' />
                      <h1>{ cv.name } { cv.surname }</h1>
                    </div>
                    <section>
                      <p><strong>{ language.dateOfBirdth }: </strong>{ cv.dateOfBirdth }</p>
                      <p><strong>{ language.city }: </strong>{ cv.city }</p>
                      <p><strong>{ language.phone }: </strong>{ cv.phone }</p>
                      <p><strong>{ language.email }: </strong>{ cv.email }</p>
                    </section>
                  </MainInformation>
                  <CvSectionsContainer>
                    <CvSection>
                      <h1><MaterialIcon icon = 'work' />{ language.experience }</h1>
                      <CvSectionItem grey>
                        <h2><strong>{ language.company }</strong></h2>
                        <div><strong>{ language.years }</strong></div>
                        <p><strong>{ language.role }</strong></p>
                      </CvSectionItem>
                      { cv.workplaces?.map( ( workplace, index ) => (
                        <CvSectionItem key = { index }>
                          <h2>{ workplace.employerName }</h2>
                          <div>{ workplace.startYear } - { workplace.endYear }</div>
                          <p>{ workplace.role }</p>
                        </CvSectionItem>
                      ) ) }
                    </CvSection>
                    <CvSection>
                      <h1><MaterialIcon icon = 'school' />{ language.education }</h1>
                      <CvSectionItem grey>
                        <h2><strong>{ language.schoolName }</strong></h2>
                        <div><strong>{ language.years }</strong></div>
                        <p><strong>{ language.graduation }</strong></p>
                      </CvSectionItem>
                      { cv.education?.map( ( school, index )  => (
                        <CvSectionItem key = { index }>
                          <h2>{ school.schoolName }</h2>
                          <div>{ school.startYear } - { school.endYear }</div>
                          <p>{ school.graduatedTitle }</p>
                        </CvSectionItem>
                      ) ) }
                    </CvSection>
                    <CvSection>
                      <h1><MaterialIcon icon = 'list_alt' />{ language.certificates }</h1>
                      { cv.certificates?.map( ( cert, index ) => (
                        <CvSectionItemSmall key = { index } >
                          { cert.certName }
                        </CvSectionItemSmall>
                      ) ) }
                    </CvSection>
                    <CvSection>
                      <h1><MaterialIcon icon = 'settings' />{ language.skills }</h1>
                      { cv.skills?.map( ( skill, index ) => (
                        <CvSectionItemSmall key = { index } >
                          { skill.skill }
                        </CvSectionItemSmall>
                      ) ) }
                    </CvSection>
                    <CvSection>
                      <h1><MaterialIcon icon = 'sports_football' />{ language.hobbies }</h1>
                      { cv.hobbies?.map( ( hobby, index ) => (
                        <CvSectionItemSmall key = { index } >
                          { hobby.hobby }
                        </CvSectionItemSmall>
                      ) ) }
                    </CvSection>
                  </CvSectionsContainer>
                </CVBox>
              }
            </React.Fragment>
          )
        }
      </Container>
    </Window>
  )
}

CvWindow.propTypes = {
  close: PropTypes.func.isRequired,
  state: PropTypes.shape({
    isLoading: PropTypes.bool,
    cvs: arrayOf( PropTypes.object ),
    shownCvNo: PropTypes.number
  }).isRequired,
  handleCvNavButtons: PropTypes.func.isRequired
}

export default CvWindow;