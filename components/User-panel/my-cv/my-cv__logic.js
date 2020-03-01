import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useRef, useEffect } from 'react'

const MyCvLogicLayer = ({ render }) => {

  const language = useSelector( s => s.language.source );
  const breadcrumbs =  [ language.userPanel.title, language.userPanel.userSettings.title ];

  return render({
    breadcrumbs
  })
}

MyCvLogicLayer.propTypes = {
  render: PropTypes.func.isRequired
}

export default MyCvLogicLayer