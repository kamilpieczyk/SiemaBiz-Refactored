import React from 'react'

import Logic from './search-company-window__logic'
import Presentation from './search-company-window__presentation'

const SearchCompanyWindow = ({ close }) => (
  <Logic
    render = { props => <Presentation { ...props } close = { close }/> }
  />
)

export default SearchCompanyWindow;