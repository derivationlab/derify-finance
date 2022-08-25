import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    const sheet = new ServerStyleSheet()
    const transform = (App) => sheet.collectStyles(<App />)
    const styleTags = sheet.getStyleElement()
    const page = ctx.renderPage(transform)
    return { ...page, ...initialProps, styleTags }
  }

  render() {
    // console.log(this.props)
    return (
      <html>
        <Head>{this.props.styleTags}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
