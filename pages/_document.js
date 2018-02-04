import Document, { Head, Main, NextScript } from 'next/document'

import { extractCritical } from 'emotion-server'
import { fontFace } from 'emotion'

export default class DocumentComponent extends Document {
  static getInitialProps ({ renderPage }) {
    const page = renderPage()
    const stylesTAG = extractCritical(page.html)

    return {
      ...renderPage(),
      ...stylesTAG
    }
  }

  render () {
    return (
      <html>
        <Head>
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />

          <link rel="manifest" href="/static/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
