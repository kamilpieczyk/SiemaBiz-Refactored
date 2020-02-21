import App from "next/app"
import React from "react"

import { Provider } from 'react-redux'
import store from '../Redux/store'
import { loginUser } from '../Redux/actions'
import authorisation from '../API/authorisation'

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  checkIfUserIsLogged = async () => {
    
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

  componentDidMount(){
    this.checkIfUserIsLogged()
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Provider store = { store }>
        <Component {...pageProps} />
      </Provider>
    )
  }
}

export default MyApp