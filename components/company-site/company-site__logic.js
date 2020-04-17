import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

const CompanySiteLogic = ({ company, render }) => {

  return render({

  })
}

CompanySiteLogic.propTypes = {
  render: PropTypes.func.isRequired,
  company: PropTypes.shape({
    owners: PropTypes.array.isRequired,
    employees: PropTypes.array.isRequired,
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    adress: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    industry: PropTypes.string.isRequired,
  })
}

export default CompanySiteLogic;