import React, { useEffect } from "react"
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'

import store from '../Redux/store'
import { loginUser, getArticles } from '../Redux/actions'
import authorisation from '../API/authorisation'
import GET from '../API/get'

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

  const fetchArticles = async () => {
    const articles = await GET( 'articles' );
    store.dispatch( getArticles( articles ) );
  }

  useEffect(
    () => {
      checkIfUserIsLogged();
      fetchArticles();
    },
    []
  )

  return (
    <Provider store = { store }>
      <Component {...pageProps} />
    </Provider>
  )
}

const makeStore = () => store;

export default withRedux( makeStore )( MyApp );