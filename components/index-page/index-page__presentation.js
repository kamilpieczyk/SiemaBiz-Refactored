import React from 'react'
import PropTypes from 'prop-types'

import { 
  Container,
} from './index-page__styles'
import SearchBox from './components/search-box'

const IndexPagePresentationLayer = () => {

  return(
    <Container>
      <SearchBox />
    </Container>
  )
}

IndexPagePresentationLayer.propTypes = {

}

export default IndexPagePresentationLayer;