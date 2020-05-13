import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import { 
  Container,
  SearchBox,
  InputTitle,
  Content,
  JobOffersContainer
 } from './job-offers-site__styles'
 import JobInput from './components/job-input'
 import Sidebar from '../UI/sidebar-box'
 import { getIndustries } from '../../data/industries'
 import JobOffer from './components/job-offer'

const Presentation = ({ handlers, jobOffers }) => {

  const language = useSelector( s => s.language.source.jobOffersSite );

  return(
    <Container>
      <SearchBox>
        {/* SEARCH INPUT */}
        <div>
          <InputTitle>
            <h1>{ language.searchInputTitle }?</h1>
            <p>{ language.searchInputSubtitle }</p>
          </InputTitle>
          <JobInput callback = { handlers.handleSearchInput }/>
        </div>
        {/* LOCATION INPUT */}
        <div>
          <InputTitle>
            <h1>{ language.localisationInputTitle }?</h1>
            <p>{ language.localisationInputSubtitle }</p>
          </InputTitle>
          <JobInput location callback = { handlers.handleLocationInput }/>
        </div>
      </SearchBox>

      <Content>
        <JobOffersContainer>
          {
            jobOffers.map( offer => (
              <JobOffer
                key = { offer._id }
                title = { offer.title }
                companyID = { offer.companyID }
                city = { offer.city }
                wages = { offer.wages }
                description = { offer.description }
              />
            ) )
          }
        </JobOffersContainer>
        <div>
          <Sidebar
            menu = { getIndustries() }
          />
        </div>
      </Content>
    </Container>
  )
}

Presentation.propTypes = {
  jobOffers: PropTypes.array.isRequired,
  handlers: PropTypes.shape({
    handleSearchInput: PropTypes.func.isRequired,
    handleLocationInput: PropTypes.func.isRequired
  }),

}

export default Presentation;