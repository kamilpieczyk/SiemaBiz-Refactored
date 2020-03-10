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

const MyCvPresentationLayer = ({
  breadcrumbs,
  mainInformationInputs,
  state,
  setState,
  handleEducationButton,
  handleWorkplacesButton,
  handleCertificatesButton,
  handleWorkplacesInput,
  handleCertificatesInput,
  handleSkillsInput,
  handleSkillsButton,
  handleHobbiesInput,
  handleHobbiesButton,
  handleSubmitCv
}) => {

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
              <React.Fragment key = { index } >
                <Input 
                  key = { index }
                  value = { element.value }
                  onChange = { element.onChange }
                  label = { element.label }
                />
                <Separator height = "20px" />
              </React.Fragment>
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
            <React.Fragment key = { i } >
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
            </React.Fragment>
          ) )
        }
        <Separator height = '20px' />
        <SubmitButton onClickFunction = { handleEducationButton }>
          <Icon icon = 'school' />
          <Separator width = '5px' />
          { language.userPanel.myCv.education.button }
        </SubmitButton>
      </Section>

      {/* EXPERIENCE */}
      <Section>
        <Separator height = '20px' />
        <TitleOfSection>{ language.userPanel.myCv.experience.title }</TitleOfSection>
        <Separator height = '20px' />
        {
          state.workplaces && state.workplaces.map( ( workplace, i ) => (
            <React.Fragment key = { i }>
              <SectionInSection>
                <Input
                  label = { language.userPanel.myCv.experience.employerName }
                  value = { workplace.employerName }
                  onChange = { e => handleWorkplacesInput( e, i, 'employerName' ) }
                />
                <Input
                  label = { language.userPanel.myCv.experience.yearOfOrigin }
                  value = { workplace.startYear }
                  onChange = { e => handleWorkplacesInput( e, i, 'yearOfOrigin' ) }
                />
                <Input
                  label = { language.userPanel.myCv.experience.yearOfEnd }
                  value = { workplace.endYear }
                  onChange = { e => handleWorkplacesInput( e, i, 'yearOfEnd' ) }
                />
                <Input
                  label = { language.userPanel.myCv.experience.position }
                  value = { workplace.role }
                  onChange = { e => handleWorkplacesInput( e, i, 'position' ) }
                />
              </SectionInSection>
              <Separator height = '20px' />
            </React.Fragment>
          ) )
        }
        <Separator height = '20px' />
        <SubmitButton onClickFunction = { handleWorkplacesButton } >
          <Icon icon = 'work' />
          <Separator width = '5px' />
          { language.userPanel.myCv.experience.button }
        </SubmitButton>
      </Section>

      {/* CERTIFICATES */}
      <Section>
        <Separator height = '20px' />
        <TitleOfSection>{ language.userPanel.myCv.certificates.title }</TitleOfSection>
        <Separator height = '20px' />
        {
          state.certificates && state.certificates.map( (cert, i ) => (
            <React.Fragment key = { i }>
              <SectionInSection>
                <Input 
                  label = { language.userPanel.myCv.certificates.certName }
                  value = { cert.certName }
                  onChange = { e => handleCertificatesInput( e, i ) }
                />
              </SectionInSection>
              <Separator height = '20px' />
            </React.Fragment>
          ))
        }
        <SubmitButton onClickFunction = { handleCertificatesButton }>
          <Icon icon = 'class' />
          <Separator width = '5px' />
          { language.userPanel.myCv.certificates.button }
        </SubmitButton>
      </Section>

      {/* SKILLS */}
      <Section>
        <Separator height = '20px' />
        <TitleOfSection>{ language.userPanel.myCv.skills.title }</TitleOfSection>
        {
          state.skills && state.skills.map(
            ( skill, i ) => (
              <React.Fragment key = { i }>
                <SectionInSection>
                  <Input 
                    label = { language.userPanel.myCv.skills.skill }
                    value = { skill.skill }
                    onChange = { e => handleSkillsInput( e, i ) }
                  />
                </SectionInSection>
                <Separator height = '20px' />
              </React.Fragment>
            )
          )
        }
        <SubmitButton onClickFunction = { handleSkillsButton }>
          <Icon icon = 'how_to_reg' />
          <Separator width = '5px' />
          { language.userPanel.myCv.skills.button }
        </SubmitButton>
      </Section>

      {/* HOBBIES */}
      <Section>
        <Separator height = '20px' />
        <TitleOfSection>
          { language.userPanel.myCv.hobbies.title }
        </TitleOfSection>
        {
          state.hobbies && state.hobbies.map(
            ( hobby, index ) => (
              <React.Fragment key = { index }>
                <SectionInSection>
                  <Input 
                    label = { language.userPanel.myCv.hobbies.hobby }
                    value = { hobby.hobby }
                    onChange = { e => handleHobbiesInput( e, index ) }
                  />
                </SectionInSection>
                <Separator height = '20px' />
              </React.Fragment>
            )
          )
        }
        <SubmitButton onClickFunction = { handleHobbiesButton }>
          <Icon icon = 'camera_roll' />
          <Separator width = '5px' />
          { language.userPanel.myCv.hobbies.button }
        </SubmitButton>
      </Section>

      <Separator height = '30px' />

      {
        state.isSending
          ? <Button maxWidth >
            <Loading />
          </Button>
          : (
            <SubmitButton maxWidth onClickFunction = { handleSubmitCv }>
              <Icon icon = 'check' />
              <Separator width = '5px' />
              { language.userPanel.myCv.submitButton }
            </SubmitButton>
          )
      }

    </Container>
  )
}

MyCvPresentationLayer.propTypes = {
  breadcrumbs: PropTypes.array.isRequired,
  state: PropTypes.object.isRequired,
  mainInformationInputs: PropTypes.array.isRequired,
  setState: PropTypes.object.isRequired,
  handleEducationButton: PropTypes.func.isRequired,
  handleWorkplacesInput: PropTypes.func.isRequired,
  handleWorkplacesButton: PropTypes.func.isRequired,
  handleCertificatesInput: PropTypes.func.isRequired,
  handleCertificatesButton: PropTypes.func.isRequired,
  handleSkillsInput: PropTypes.func.isRequired,
  handleSkillsButton: PropTypes.func.isRequired,
  handleHobbiesInput: PropTypes.func.isRequired,
  handleHobbiesButton: PropTypes.func.isRequired,
  handleSubmitCv: PropTypes.func.isRequired,
}

export default MyCvPresentationLayer