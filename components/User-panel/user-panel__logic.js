import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import router from 'next/router'
import PropTypes from 'prop-types'

const UserPanelLogicLayer = ({ render }) => {

  const redirectToHomepageIfUserIsNotLogged = () => {
    const isUserLogged = window.localStorage.getItem( 'passport' );
    
    if( !isUserLogged ){
      router.push( '/' );
    }
  }

  useEffect(
    () => {
      redirectToHomepageIfUserIsNotLogged();
    },
    []
  )

  return render({

  })
}

UserPanelLogicLayer.propTypes = {
  render: PropTypes.func.isRequired,
}

export default UserPanelLogicLayer