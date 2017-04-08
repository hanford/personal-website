import Head from 'next/head'

export default ({ title }) => (
  <Head>
    <title>{title ? title : 'Jack Hanford'}</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />

    <link rel='stylesheet' type='text/css' href='http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css' />

    <style dangerouslySetInnerHTML={{__html: `
      @font-face {
        font-family: 'Brandon';
        font-style: normal;
        font-weight: 300;
        src: local('Brandon'), url('/static/brandon-regular.woff') format('woff');
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
        background-color: #545da9;
        background-image: linear-gradient(to bottom left, rgba(100,255,250,0) 0%, rgba(100,255,250,.5) 75%, rgba(100,255,250,.5) 100%);
        color: white;
      }

      body > div:first-of-type {
        height: 100%;
        display: block;
        overflow: scroll;
      }

      * {
        box-sizing: border-box;
      }

      [data-reactroot] {
        font-size: 16px;
        height: 100%;
        width: 100%;
      }
    `}} />
  </Head>
)
