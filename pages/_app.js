import App from "next/app"
import React from "react"

import { Provider } from 'react-redux'
import store from '../Redux/store'

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
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