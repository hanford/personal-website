import { extractCritical } from 'emotion-server';
import Document, { Head, Main, NextScript } from 'next/document';

interface Props {
  css: any
}

export default class DocumentComponent extends Document<Props> {
  static getInitialProps({ renderPage }: any) {
    const page = renderPage();
    const stylesTAG = extractCritical(page.html);

    return {
      ...renderPage(),
      ...stylesTAG,
    };
  }

  render() {
    return (
      <html>
        <Head>
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicon-16x16.png"
          />

          <link rel="manifest" href="/static/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
