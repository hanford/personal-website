import Link from 'next/link'

import { GithubBadge, Head } from '../components'

export default () => (
  <div className='container'>
    <Head />

    <GithubBadge
      url='https://github.com/hanford/chirp'
      title='Star on Github'
    />

    <div className='hero'>
      <div className='content'>
        <h1 style={{marginBottom: '0'}}>Chirp <span style={{fontSize: '3rem'}}>🐦</span></h1>
        <p style={{marginTop: '0.5rem', marginBottom: '3rem'}}>
          A desktop twitter application built for all platforms
        </p>

        <img src='../static/chirp.jpg' />

        <div className='download-section'>
          <h3>Downloads</h3>

          <div className='download-row'>
            <a
              target='_blank'
              href='https://file-cjddyxvqbc.now.sh/Chirp-darwin-x64.zip'
              className='backButton'
              download='Chirp.zip'
            >
              Mac
            </a>

            <a
              target='_blank'
              href='https://file-fevwnujbqw.now.sh/Chirp-linux-x64.zip'
              className='backButton'
              download='Chirp.zip'
            >
              Linux
            </a>

            <a
              target='_blank'
              href='https://file-pwszcfrfqv.now.sh/Chirp-win32-x64.zip'
              className='backButton'
              download='Chirp.zip'
            >
              Windows
            </a>
            </div>
        </div>


        <h2 style={{marginTop: '14rem'}}>Video</h2>
        <br />
        <iframe width='100%' height='360' src='https://www.youtube.com/embed/OfysGhGIHp8' frameborder='0' allowfullscreen></iframe>
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

      .download-section {
        display: flex;
        flex-direction: column;
        margin-top: 6rem;
      }

      .download-row {
        display: flex;
        flex-direction: row;
        justify-cotent: space-between;
        margin: auto;
      }

      @media(max-width: 768px) {
        .download-row {
          flex-direction: column;
        }
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
        margin: 0 1.5rem;
        font-weight: bold;
        min-width: 20rem;
      }

      @media(max-width: 768px) {
        .backButton {
          margin: 1.5rem 0;
          min-width: 24rem;
        }
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
