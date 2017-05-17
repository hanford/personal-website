import Link from 'next/link'

import { GithubBadge, Head } from '../../components'

export default () => (
  <div className='container'>
    <Head />

    <GithubBadge
      url='https://github.com/hanford/youtube-darkmode'
      title='Star on Github'
    />

    <div className='hero'>
      <div className='content'>
        <h1 style={{marginBottom: '0'}}>Youtube Material UI</h1>
        <p style={{marginTop: '0.5rem', marginBottom: '3rem'}}>Google is redesigning youtube and adding darkmode, this enables it right now.</p>

        <iframe width='100%' height='360' src='https://www.youtube.com/embed/plz6bGOb3VI' frameborder='0' allowfullscreen></iframe>

        <a
          target='_blank'
          href='https://chrome.google.com/webstore/detail/ajngaombckgmodafdnmipfmcfgppnnhp'
          className='backButton'
        >
          Add to Google Chrome
        </a>
      </div>
    </div>

    <style jsx>{`
      .container {
        display: flex;
        max-width: 100%;
        height: 100%;
        justify-content: center;
        text-align: center;
      }

      .hero {
        max-width: 100%;
        width: 100%;
        background-color: white;
        color: rgba(0, 0, 0, 0.8);
        margin: 6rem 0;
        min-height: 60rem;
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

      iframe {
        width: 100%;
        max-width: 60rem;
        box-sizing: border-box;
        margin: 0 auto;
        box-shadow: 0 0.4rem 4rem rgba(0, 0, 0, 0.35);
        border-radius: 4px;
        border: 0;
      }
    `}</style>
  </div>
)
