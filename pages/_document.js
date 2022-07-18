import Document, { Head, Main, NextScript } from 'next/document';
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from 'styled-components';
import GlobalStyle from '../styles/global';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage(App => props =>
      sheet.collectStyles(
        <React.Fragment>
          <GlobalStyle />
          <App {...props} />
        </React.Fragment>
      )
    );

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <link rel='icon' type='image/png' sizes='32x32' href='/favicon.png' />
          <link href='https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,700' rel='stylesheet' />
          <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'></link>
          <link href='https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.css' rel='stylesheet' />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
