import App, { Container } from "next/app"
import React from "react"

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
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default MyApp