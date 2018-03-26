import HeadTag from 'next/head'

export const Head = ({ title, description }) => (
  <HeadTag>
    <title>{title || 'Jack Hanford'}</title>
    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    <meta name='name' content={title || 'Jack Hanford'} />
    <meta name='description' content={description || 'Engineer - Hacker - Technology Addict'} />

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
        background: linear-gradient(-45deg, #D20B54 0%, #FFB849 100%) center center fixed;
      }

      * {
        box-sizing: border-box;
      }

      #__next {
        font-size: 1.6rem;
      }
    `}} />
  </HeadTag>
)

export default Head
