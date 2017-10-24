import Link from 'next/link'
import GithubBadge from 'react-github-badge'

import { Head, CtaButton, Title } from '../components'

export default function YoutubeDarkmode () {
  return (
    <div className='container'>
      <Head />

      <GithubBadge
        url='https://github.com/hanford/youtube-darkmode'
        title='Star on Github'
      />

      <div className='hero'>
        <div className='content'>
          <Title>Youtube Darkmode</Title>
          <p style={{marginTop: '0.5rem', marginBottom: '3rem'}}>
            Google is redesigning youtube and also adding darkmode, this enables it right now
          </p>

          <img src='../static/darkmode.jpg' />

          <CtaButton link='https://chrome.google.com/webstore/detail/ajngaombckgmodafdnmipfmcfgppnnhp'>Add to Google chrome</CtaButton>

          <h2 style={{marginTop: '8rem'}}>How to video</h2>
          <p style={{maxWidth: '60rem', margin: '0 auto'}}>After installing the chrome extension, simply go to youtube and click "ok", and you'll load up the new youtube interface, from there you can enable darkmode or just enjoy the new white interface.</p>
          <br />
          <iframe width='100%' height='360' src='https://www.youtube.com/embed/plz6bGOb3VI' frameborder='0' allowfullscreen></iframe>
          <br />
          <br />
        </div>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          max-width: 100%;
          justify-content: center;
          text-align: center;
          -webkit-overflow-scrolling: touch;
          overflow: auto;
        }

        .hero {
          max-width: 100%;
          width: 100%;
          background-color: white;
          color: rgba(0, 0, 0, 0.8);
          margin: 6rem 0;
          min-height: 60rem;
          padding: 2rem;
        }

        .content {
          display: flex;
          flex-direction: column;
        }

        .backButton {
          display: block;
          line-height: 4rem;
          padding: 0 1.4rem;
          box-shadow: 0 0.4rem 0.6rem rgba(50,50,93,.11), 0 0.1rem 0.3rem rgba(0,0,0,.08);
          background: #fff;
          border-radius: 0.4rem;
          font-size: 1.2rem;
          text-transform: uppercase;
          letter-spacing: .025em;
          color: #32325d;
          text-decoration: none;
          border: 0px;
          cursor: pointer;
          outline: none;
          transition: all 0.25s ease-out;
          border: 2px solid #db594b;
          color: #db594b;
          margin: 4rem auto 0;
          font-weight: bold;
        }

        iframe,
        img {
          width: 60rem;
          max-width: 80%;
          box-sizing: border-box;
          margin: 0 auto;
          box-shadow: 0 0.4rem 4rem rgba(0, 0, 0, 0.35);
          border-radius: 4px;
          border: 0;
        }
      `}</style>
    </div>
  )
}
