import HeadTag from "next/head";

export const Head = ({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) => (
  <HeadTag>
    <title>{title || "Jack Hanford"}</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta name="name" content={title || "Jack Hanford"} />

    <meta
      name="description"
      content={description || "Engineer - Hacker - Technology Addict"}
    />

    <meta name="theme-color" content="#db594b" />

    <link
      rel="stylesheet"
      type="text/css"
      href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
    />

    <style
      dangerouslySetInnerHTML={{
        __html: `
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
          src: local('Brandon'), url('/static/brandon-medium.woff') format('woff');
        }

        html,
        body {
          background: linear-gradient(-45deg, #d20b54 0%, #ffb849 100%);
        }

        @media (prefers-color-scheme: dark) {
          html,
          body {
            background: #0e0e0e;
          }
        }

        html,
        body,
        #__next {
          font-family: Brandon, -apple-system, BlinkMacSystemFont,Helvetica, Arial, sans-serif;
          width: 100%;
          height: 100%;
          overflow: auto;
          margin: 0;
          padding: 0;
          font-size: 10px;
          color: #32325d;
        }

        @media (prefers-color-scheme: dark) {
          html, body, #__next {
            color: rgba(255,255,255,0.9);
          }
        }
          
        * {
          box-sizing: border-box;
        }

        #__next {
          font-size: 1.6rem;
        }
      `,
      }}
    />
  </HeadTag>
);

export default Head;
