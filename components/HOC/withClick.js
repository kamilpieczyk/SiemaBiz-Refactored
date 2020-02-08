import React from 'react'
import PropTypes from 'prop-types'

export default ( Component ) => {

  const ClicableButton = ({ onClickFunction, thin, children }) => {

    return (
      <div onClick = { onClickFunction }>
        <Component thin = { thin }>
          { children }
        </Component>
      </div>
    )
  }

  ClicableButton.propTypes = {
    onClickFunction: PropTypes.func.isRequired,
    thin: PropTypes.bool
  }

  return ClicableButton
}