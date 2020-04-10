import React from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

import {
  Container,
  Sidebar,
  Content,
  SearchResult
} from './cathalogue-site__styles'
import ApiKey from '../../API/key'
import getIndustries from '../../data/industries'
import Button from '../UI/small-button'
import SidebarBox from '../UI/sidebar-box'

import withClick from '../HOC/withClick'

const ClickableButton = withClick( Button );

const CathalogueSite = ({ searchResults }) => {
  const language = useSelector( s => s.language.source );
  const router = useRouter();

  console.log( searchResults );

  const handleButton = ( id ) => {
    router.push({
      pathname: '/company',
      query: { id }
    })
  }

  return(
    <Container>
      <Content>
        {
          searchResults && searchResults.map( ( result, index ) => (
            <SearchResult key = { result.name + index }>
              <div className = 'image-container'>
                <img src = { `${ ApiKey }uploads/logos/${ result.logo }` } />
              </div>
              
              <div>
                <h3>{ result.name }</h3>
                <span>{ result.industry }</span>
                <p>{ result.description.slice( 0, 400 ) } ...</p>
                <div className = 'button-container'>
                  <ClickableButton onClickFunction = { () => handleButton( result._id ) }>
                    { language.cathalogueSite.button }
                  </ClickableButton>
                </div>
              </div>
            </SearchResult>
          ) )
        }
      </Content>

      <Sidebar>
        <SidebarBox menu = { getIndustries() } />
      </Sidebar>
    </Container>
  )
}

CathalogueSite.propTypes = {
  searchResults: PropTypes.array.isRequired,
}

export default CathalogueSite;