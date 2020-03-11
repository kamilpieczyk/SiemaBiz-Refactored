import React from "react"
import PropTypes from 'prop-types'

import {
  Container,
  Dot
} from "./dotBreadcrumbs__style"


const DotedBreadcrumbs = ( { numberOfSites, activeCrumb } ) => {

  const sites = []
  for( let i = 1 ; i <= numberOfSites ; i++ ){
    sites.push( i )
  }

  return(
    <Container>
      {
        sites.map( site => (
          <Dot
            key = { site }
            active = { site === activeCrumb ? true : false } 
          />
        ) )
      }
    </Container>
  )
}

DotedBreadcrumbs.propTypes = {
  numberOfSites: PropTypes.number.isRequired,
  activeCrumb: PropTypes.number.isRequired
}

export default DotedBreadcrumbs