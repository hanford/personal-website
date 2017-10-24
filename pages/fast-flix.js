import React from 'react'
import Link from 'next/link'
import GithubBadge from 'react-github-badge'

import { Head, Title, CtaButton, HeroImage } from '../components'

export default () => (
  <div className='container'>
    <Head />

    <GithubBadge
      url='https://github.com/hanford/fast-flix'
      title='Star on Github'
    />

    <div className='hero'>
      <div className='content'>
        <Title>Fast Flix 🍿</Title>
        <p style={{marginTop: '0.5rem', marginBottom: '3rem'}}>Modify playback speed of any video on netflix</p>

        <HeroImage src='../static/fast-flix.jpg' />

        <CtaButton link='https://chrome.google.com/webstore/detail/ldcailklfommolipjecojcgodjdoaedi'>Add to Google chrome</CtaButton>

        <h2 style={{marginTop: '8rem'}}>How to video</h2>
        <p style={{maxWidth: '60rem', margin: '0 auto'}}>After installing the chrome extension, click the icon and you should be good to go!</p>
        <br />
        <iframe width='100%' height='360' src='https://www.youtube.com/embed/D2ry16dNEIY' frameborder='0' allowfullscreen />
        <br />
        <br />
      </div>
    </div>

    <style jsx>{`
      .container {
        display: flex;
        max-width: 100%;
        height: 100%;
        justify-content: center;
        text-align: center;
        overflow: hidden !important;
      }

      .hero {
        max-width: 100%;
        width: 100%;
        background-color: white;
        color: rgba(0, 0, 0, 0.8);
        padding: 2rem 0;
        margin-top: 2rem;
        min-height: 60rem;
      }

      .content {
        display: flex;
        flex-direction: column;
        width: 80%;
        margin: 0 auto;
      }

      iframe {
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
