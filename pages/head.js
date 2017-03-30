import Head from 'next/head'

export default ({ title }) => (
  <Head>
    <title>{title ? title : 'Jack Hanford'}</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <style dangerouslySetInnerHTML={{__html: `
        @font-face {
            font-family: 'Brandon';
            font-style: normal;
            font-weight: 300;
            src: local('Brandon'),
                 url('/static/brandon-regular.woff') format('woff');
          }

          @font-face {
              font-family: 'Brandon';
              font-style: normal;
              font-weight: 600;
              src: local('Brandon'),
                   url('/static/brandon-medium.woff') format('woff');
            }

          html,
          body,
          #__next {
            font-family: Brandon, Arial;
            height: 100%;
            width: 100%;
            margin: 0;
            padding: 0;
            font-size: 10px;
          }

          * {
            box-sizing: border-box;
          }

          #__next {
            font-size: 16px;
          }
    `}} />
  </Head>
)
