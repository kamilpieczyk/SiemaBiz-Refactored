import React from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import MaterialIcon from '@material/react-material-icon'
import { debounce } from 'lodash'

import { 
  Container,
  Box,
  Input
} from './searchBox__styles'

const SearchBoxPresentationLayer = ({ state, handlers, inputRef, small }) => {

  const language = useSelector( s => s.language.source );

  const router = useRouter();
  const searchQuery = router.query.search;

  return(
    <Container small = { small }>
      <Box small = { small }>
        { !small && <h1>{ language.indexPage.searchBoxTitle }</h1> }
        <Input small = { small }>
          <div className = 'icon'>
            <MaterialIcon icon = 'search' />
          </div>
          <input
            type = 'text'
            ref = { inputRef }
            defaultValue = { searchQuery }
            onChange = { debounce( handlers.search, 1000 ) }
          />
        </Input>
      </Box>
    </Container>
  )
}

SearchBoxPresentationLayer.propTypes = {
  state: PropTypes.shape({
    searchValue: PropTypes.string
  }),
  handlers: PropTypes.shape({
    search: PropTypes.func.isRequired,
  }),
  inputRef: PropTypes.object.isRequired,
  small: PropTypes.bool
}

export default SearchBoxPresentationLayer;