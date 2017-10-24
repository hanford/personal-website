import GithubBadge from 'react-github-badge'

import { Head, CtaButton, HeroImage, Title, Description, Frame } from '../components'

export default function Chirp () {
  return (
    <div className='container'>
      <Head
        title='Chirp | Jack Hanford'
        description='A desktop twitter application built for all platforms'
      />

      <GithubBadge
        url='https://github.com/hanford/chirp'
        title='Star on Github'
      />

      <div className='hero'>
        <Title>Chirp <span style={{fontSize: '3rem'}}>🐦</span></Title>
        <Description>A desktop twitter application built for all platforms</Description>

        <HeroImage src='../static/chirp.jpg' />

        <div className='download-section'>
          <h3>Downloads</h3>

          <div className='download-row'>
            <a
              target='_blank'
              href='https://file-cjddyxvqbc.now.sh/Chirp-darwin-x64.zip'
              className='downloadBtn'
              download='Chirp.zip'
            >
              Mac
            </a>

            <a
              target='_blank'
              href='https://file-fevwnujbqw.now.sh/Chirp-linux-x64.zip'
              className='downloadBtn'
              download='Chirp.zip'
            >
              Linux
            </a>

            <a
              target='_blank'
              href='https://file-pwszcfrfqv.now.sh/Chirp-win32-x64.zip'
              className='downloadBtn'
              download='Chirp.zip'
            >
              Windows
            </a>
          </div>
        </div>

        <h2 style={{marginTop: '14rem'}}>Video</h2>

        <Frame src='https://www.youtube.com/embed/OfysGhGIHp8' />
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

        .downloadBtn {
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
          .downloadBtn {
            margin: 1.5rem 0;
            min-width: 24rem;
          }
        }

      `}</style>
    </div>
  )
}
