import {  } from 'react'
import PropTypes from 'prop-types'

import GET from '../../API/get'

const Logic = ({ render, jobOffers }) => {
  console.log( jobOffers );

  const handleSearchInput = value => {

  }

  const handleLocationInput = value => {

  }

  return render({
    jobOffers,
    handlers: {
      handleSearchInput,
      handleLocationInput
    }
  })
}

Logic.propTypes = {
  render: PropTypes.func.isRequired,
  jobOffers: PropTypes.array.isRequired
}

export default Logic;