import App, { Container } from "next/app"
import React from "react"
import Head from "next/head"

// import { Provider } from "react-redux"
// import withReduxStore from "../store/withReduxStore"

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    // const { Component, pageProps, reduxStore } = this.props
    const { Component, pageProps } = this.props

    return (
      <Container>
        {/* <Provider store={reduxStore} > */}
          <Component {...pageProps} />
        {/* </Provider> */}
      </Container>
    )
  }
}

// export default withReduxStore(MyApp)

export default MyApp