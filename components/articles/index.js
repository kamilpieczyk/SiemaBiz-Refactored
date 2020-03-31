import React from 'react'
import PropTypes from 'prop-types'

import LogicLayer from './articles__logic'
import PresentLayer from './articles__presentation'

const Articles = ( props ) => (
  <LogicLayer
    { ...props }
    render = { props => <PresentLayer { ...props } /> }
  />
)

Articles.propTypes = {
  articles: PropTypes.array.isRequired
}

export default Articles;