import React from 'react'
import PropTypes from 'prop-types'
import { router, useRouter } from 'next/router'

import { Container, Site } from './pagination__styles'

const Pagination = ({ numberOfSites }) => {

  const router = useRouter();
  const path = router.pathname;
  const queries = router.query;
  const currentSite = router.query.site;
  const sites = [];
  for( let i = 1 ; sites.length < numberOfSites ; i++) sites.push( i );

  const handleClick = site => {
    router.push({ pathname: path, query: {  ...queries, site } })
      .then( () => {
        window.scrollTo( 0, 0 );
      } )
  }
  return(
    <Container>
      {
        sites.map( ( site, index ) => (
          <Site
            key = { index }
            onClick = { () => handleClick( site ) }
            isCurrent = { site == currentSite }
          >
            { site }
          </Site>
        ) )
      }
    </Container>
  )
}

Pagination.propTypes = {
  numberOfSites: PropTypes.number.isRequired
}

export default Pagination;