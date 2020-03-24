import React, { useEffect } from "react"
import { Provider } from 'react-redux'

import store from '../Redux/store'
import { loginUser } from '../Redux/actions'
import authorisation from '../API/authorisation'

function MyApp({ Component, pageProps }) {

  const checkIfUserIsLogged = async () => {
    
    const passport = window.localStorage.getItem( 'passport' );

    if( passport ){
      const user = await authorisation()
      if( user ){
        store.dispatch( loginUser({
          username: user.username,
          privileges: user.privileges,
          email: user.email,
          name: user.name,
          surname: user.surname,
          phone: user.phone,
          id: user.id
        }) )
      }
    }
  }

  useEffect(
    () => {
      checkIfUserIsLogged()
    },
    []
  )

  return (
    <Provider store = { store }>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp