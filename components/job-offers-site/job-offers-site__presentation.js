import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import { 
  Container,
  SearchBox,
  InputTitle,
  Content,
  JobOffersContainer,
  SortButtonsContainer,
  SortButton } from './job-offers-site__styles'
 import JobInput from './components/job-input'
 import Sidebar from '../UI/sidebar-box'
 import { getIndustries } from '../../data/industries'
 import JobOffer from './components/job-offer'
 import Pagination from '../UI/pagination'

const Presentation = ({ handlers, jobOffers, state }) => {

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

      <SortButtonsContainer>
        <div>{ language.sortBy }:</div>
        <SortButton 
          onClick = { () => handlers.setSortMode( 'date' ) }
          isActive = { state.sortMode === 'date' }
          >
            { language.date }
        </SortButton>
        <SortButton 
          onClick = { () => handlers.setSortMode( 'name' ) }
          isActive = { state.sortMode === 'name' }
          >
            { language.title }
        </SortButton>
      </SortButtonsContainer>

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
                industry = { offer.industry }
                description = { offer.description }
                date = { offer.date }
              />
            ) )
          }
        </JobOffersContainer>
        <div>
          <Sidebar
            menu = { getIndustries() }
          />
        </div>
        <Pagination numberOfSites = { state.numberOfSites }/>
      </Content>
    </Container>
  )
}

Presentation.propTypes = {
  jobOffers: PropTypes.array.isRequired,
  state: PropTypes.shape({
    sortMode: PropTypes.string.isRequired,
    numberOfSites: PropTypes.number.isRequired
  }).isRequired,
  handlers: PropTypes.shape({
    handleSearchInput: PropTypes.func.isRequired,
    handleLocationInput: PropTypes.func.isRequired,
    setSortMode: PropTypes.func.isRequired
  }),

}

export default Presentation;