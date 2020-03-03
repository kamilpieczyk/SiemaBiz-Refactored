import React from 'react'
import PropTypes, { object } from 'prop-types'
import { useSelector } from 'react-redux'
import Icon from '@material/react-material-icon'

import { Container, MainDetails, Section, TitleOfSection, SectionInSection } from './my-cv__styles'
import Breadcrumbs from '../../UI/breadcrumbs'
import Separator from '../../UI/separator'
import Button from '../../UI/small-button'
import Loading from '../../UI/loading-circle'
import Input from '../../UI/input'

import withClick from '../../HOC/withClick'

const SubmitButton = withClick( Button );

const MyCvPresentationLayer = ({ breadcrumbs, mainInformationInputs, state, setState, handleEducationButton }) => {

  const language = useSelector( s => s.language.source );

  return(
    <Container id = 'my-cv' >
      <Breadcrumbs
        generalCrumb = { language.userPanel.myCv.title }
        breadcrumbs = { breadcrumbs }
      />

      <MainDetails>
        <Separator height = "30px" />
        {
          mainInformationInputs.map(
            ( element, index ) => (
              <>
                <Input 
                  key = { index }
                  value = { element.value }
                  onChange = { element.onChange }
                  label = { element.label }
                />
                <Separator height = "20px" />
              </>
            )
          )
        }          
      </MainDetails>

      <Separator height = '20px' />

      <Section>
        {/* EDUCATION */}
        <Separator height = '20px' />
        <TitleOfSection>{ language.userPanel.myCv.education.title }</TitleOfSection>
        <Separator height = '20px' />
        {
          state.education && state.education.map( ( school, i ) => (
            <>
              <SectionInSection>
                  <Input
                    name = "startYear"
                    label = { language.userPanel.myCv.education.schoolName }
                    value = { school.schoolName }
                    onChange = { ( e ) => {
                      const value = e.target.value;
                      const edu = [ ...state.education ];
                      edu[i] = {
                        ...edu[i],
                        schoolName: value
                      }
                      setState.education( edu )
                    } }
                  />
                  <Input
                    name = "startYear"
                    label = { language.userPanel.myCv.education.yearOfOrigin }
                    value = { school.startYear }
                    onChange = { ( e ) => {
                      const value = e.target.value;
                      const edu = [ ...state.education ];
                      edu[i] = {
                        ...edu[i],
                        startYear: value
                      }
                      setState.education( edu )
                    } }
                  />
                  <Input
                    name = "yearOfEnd"
                    label = { language.userPanel.myCv.education.yearOfEnd}
                    value = { school.endYear }
                    onChange = { ( e ) => {
                      const value = e.target.value;
                      const edu = [ ...state.education ];
                      edu[i] = {
                        ...edu[i],
                        endYear: value
                      }
                      setState.education( edu )
                    } }
                  />
                  <Input
                    name = "graduation"
                    label = { language.userPanel.myCv.education.graduation }
                    value = { school.graduatedTitle }
                    onChange = { ( e ) => {
                      const value = e.target.value;
                      const edu = [ ...state.education ];
                      edu[i] = {
                        ...edu[i],
                        graduatedTitle: value
                      }
                      setState.education( edu )
                    } }
                  />
              </SectionInSection>
              <Separator height = '20px' />
            </>
          ) )
        }
        <Separator height = '20px' />
        <SubmitButton onClickFunction = { handleEducationButton }>
          <Icon icon = 'school' />
          <Separator width = '5px' />
          { language.userPanel.myCv.education.button }
        </SubmitButton>
      </Section>


    </Container>
  )
}

MyCvPresentationLayer.propTypes = {
  breadcrumbs: PropTypes.array.isRequired,
  state: PropTypes.object.isRequired,
  mainInformationInputs: PropTypes.array.isRequired,
  setState: PropTypes.object.isRequired,
  handleEducationButton: PropTypes.func.isRequired
}

export default MyCvPresentationLayer