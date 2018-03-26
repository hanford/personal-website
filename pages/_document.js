import Document, { Head, Main, NextScript } from 'next/document'
import Segment from 'load-segment'

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

  componentDidMount () {
    Segment({key: 'ZxJCBTbXZd76MG9R33zSOb43ULCjknzN'})
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
