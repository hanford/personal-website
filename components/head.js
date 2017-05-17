import HeadTag from 'next/head'
import Segment from 'load-segment'

Segment({key: 'ZxJCBTbXZd76MG9R33zSOb43ULCjknzN'})

export const Head = ({ title }) => (
  <HeadTag>
    <title>{title ? title : 'Jack Hanford'}</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta name="name" content="Jack Hanford" />
    <meta name="description" content="Engineer - Hacker - Technology Addict" />

    <link rel='stylesheet' type='text/css' href='https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css' />

    <style dangerouslySetInnerHTML={{__html: `
      @font-face {
        font-family: 'Brandon';
        font-style: normal;
        font-weight: 300;
        font-display: auto;
        src: local('Brandon'), url('/static/brandon-regular.woff') format('woff');
      }

      @font-face {
        font-family: 'Brandon';
        font-style: normal;
        font-weight: 600;
        font-display: auto;
        src: local('Brandon'),
             url('/static/brandon-medium.woff') format('woff');
      }

      html,
      body,
      #__next {
        font-family: Brandon, Arial;
        width: 100%;
        overflow: auto;
        margin: 0;
        padding: 0;
        font-size: 10px;
        background-image: linear-gradient(-45deg, #D20B54 0%, #FFB849 100%);

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
        font-size: 1.6rem;
        height: 100%;
      }
    `}} />
  </HeadTag>
)

export default Head
