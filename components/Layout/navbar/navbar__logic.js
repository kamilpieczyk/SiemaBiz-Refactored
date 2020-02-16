import { memo, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setScroll, logoutUser } from '../../../Redux/actions'

export default memo( (props) => {

  const [ isLoginPopup, setLoginPopup ] = useState( false )
  
  const dispatch = useDispatch();
  const isMenuActive = useSelector( state => state.globalMenu );
  const languageSource = useSelector( state => state.language.source );
  const isScrolled = useSelector( state => state.isPageScrolled );
  const isUserLogged = useSelector( state => state.user.username );
  const isUserMenuActive = useSelector( state => state.isUserMenuActiv );
  const deviceScreenResolution = useSelector( state => state.deviceScreen );

  useEffect( () => {
    window.addEventListener( 'scroll', () => {
      const scrlY = window.scrollY
      if( scrlY > 150 ) dispatch( setScroll( true ) )
      else dispatch( setScroll( false ) )
    } )
  }, [] )

  return props.render({
    scroll: isScrolled,
    isMenuActive,
    isUserMenuActive,
    languageSource,
    isUserLogged,
    deviceScreenResolution,
    loginPopup: {
      isLoginPopup,
      setLoginPopup
    },
    logout: () => dispatch( logoutUser() )
  })
} )