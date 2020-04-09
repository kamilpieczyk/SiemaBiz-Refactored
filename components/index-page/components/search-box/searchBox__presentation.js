import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import MaterialIcon from '@material/react-material-icon'

import { 
  Container,
  Box,
  Input
} from './searchBox__styles'

const SearchBoxPresentationLayer = () => {

  const language = useSelector( s => s.language.source );

  return(
    <Container>
      <Box>
        <h1>{ language.indexPage.searchBoxTitle }</h1>
        <Input>
          <div className = 'icon'>
            <MaterialIcon icon = 'search' />
          </div>
          <input type = 'text'/>
        </Input>
      </Box>
    </Container>
  )
}

SearchBoxPresentationLayer.propTypes = {

}

export default SearchBoxPresentationLayer;