import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import MaterialIcon from '@material/react-material-icon'

import {
  Container,
  Sidebar,
  Content,
  SearchLineSeparator,
  NoSearchResults
} from './cathalogue-site__styles'

import getIndustries from '../../data/industries'
import Button from '../UI/small-button'
import SidebarBox from '../UI/sidebar-box'
import CompanyBox from '../UI/company-box'
import CompaniesContent from '../UI/companies-content-container'

import withClick from '../HOC/withClick'
import Separator from '../UI/separator'

const ClickableButton = withClick( Button );

const CathalogueSite = ({ searchResults, companies }) => {
  const language = useSelector( s => s.language.source );
  const router = useRouter();
  const searchQuery = router.query.search;

  return(
    <Container>
      <Content>
        {
          searchQuery && searchResults.length === 0 && (
            <NoSearchResults>
              <MaterialIcon icon = 'sentiment_very_dissatisfied' />
              <Separator height = '10px' />
              { language.cathalogueSite.noSearchResults }
            </NoSearchResults>
          )
        }
        {
          searchResults && searchResults.map( ( result, index ) => (
            <Fragment key = { result.name + index }>
              <CompanyBox company = { result } />
              <Separator height = '10px' />
            </Fragment>
          ) )
        }
        { searchResults.length > 0 && <SearchLineSeparator /> }
        <CompaniesContent companies = { companies } />
      </Content>

      <Sidebar>
        <SidebarBox menu = { getIndustries() } />
      </Sidebar>
    </Container>
  )
}

CathalogueSite.propTypes = {
  searchResults: PropTypes.array,
  companies: PropTypes.array.isRequired,
}

export default CathalogueSite;