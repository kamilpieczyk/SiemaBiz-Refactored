import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

const UserMenuLogicLayer = ({ render }) => {
  const [ buttonPosition, setButtonPosition ] = useState( document.getElementById( 'logged-user-button' ) );

  const isPageScrolled = useSelector( state => state.isPageScrolled );
  const languageSource = useSelector( state => state.language.source );

  useEffect(
    () => {
      getTheButtonPosition()
    },
    []
  )

  const getTheButtonPosition = () => {
    const button = document.getElementById( 'logged-user-button' );
    setButtonPosition( button.offsetLeft )
  }

  return render({
    buttonPosition,
    isPageScrolled,
    languageSource
  })
}

UserMenuLogicLayer.propTypes = {
  render: PropTypes.func.isRequired
}

export default UserMenuLogicLayer