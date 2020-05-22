import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import MaterialIcon from '@material/react-material-icon'

import {
  Container,
  Content,
  Title,
  Head,
  InfoBox,
  Description,
  DutiesReqirements,
  LoadingButton,
  ApplyButton } from './job-offer-page__styles'
import Sidebar from '../UI/sidebar-box'
import { getIndustries } from '../../data/industries'

const JobOfferPagePresentation = ({ offer, isLoading, handleApplyButton }) => {
  
  const language = useSelector( s => s.language.source.jobOfferPage );

  return(
    <Container>
      <Content>
        { isLoading
            ? <LoadingButton><img src = '/images/loading.gif' />{ language.loading }</LoadingButton>
            : <ApplyButton onClick = { handleApplyButton }><MaterialIcon icon = 'done' />{ language.apply }</ApplyButton>
        }
        <Head>
          { offer.logo && <img src = {`uploads/logos/${offer.logo}`} /> }
          <Title>
            <h1>{ offer.title }</h1>
            <h2>{ offer.company }</h2>
            <h3>{ offer.companyLocation } • { offer.date }</h3>
            <h4>{ offer.companyAdress }</h4>
          </Title>
        </Head>
        <InfoBox>
          <div><MaterialIcon icon = 'place' /><p>{ offer.city }</p></div>
          <div><MaterialIcon icon = 'account_balance_wallet' /><p>{ offer.wages }</p></div>
        </InfoBox>
        <Description>
          { offer.description }
        </Description>
        <DutiesReqirements>
          <h2>{ language.duties }:</h2>
          { offer.duties?.map( ( duty, index ) => (
            <div key = { index+duty } ><MaterialIcon icon = 'keyboard_arrow_right' />{ duty }</div>
          ) ) }
        </DutiesReqirements>
        <DutiesReqirements>
          <h2>{ language.requirements }:</h2>
          { offer.requirements?.map( ( requirement, index ) => (
            <div key = { index+requirement } ><MaterialIcon icon = 'keyboard_arrow_right' />{ requirement }</div>
          ) ) }
        </DutiesReqirements>
      </Content>
      <Sidebar light menu = { getIndustries( true ) } />
    </Container>
  )
}

JobOfferPagePresentation.propTypes = {
  isLoading: PropTypes.bool,
  handleApplyButton: PropTypes.func.isRequired,
  offer: PropTypes.shape({
    logo: PropTypes.string,
    company: PropTypes.string,
    companyLocation: PropTypes.string,
    companyAdress: PropTypes.string,
    title: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    hours: PropTypes.string.isRequired,
    wages: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    industry: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    duties: PropTypes.arrayOf( PropTypes.string ).isRequired,
    requirements: PropTypes.arrayOf( PropTypes.string ).isRequired,
  })
}

export default JobOfferPagePresentation;