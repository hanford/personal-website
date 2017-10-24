import React from 'react'
import Link from 'next/link'
import GithubBadge from 'react-github-badge'

import { Head, CtaButton, HeroImage, Title } from '../components'

export default () => (
  <div className='container'>
    <Head />

    <GithubBadge
      url='https://github.com/hanford/Instachrome'
      title='Star on Github'
    />

    <div className='hero'>
      <div className='content'>
        <Title>Instachrome</Title>

        <p style={{marginTop: '0.5rem', marginBottom: '3rem'}}>Browse instagram from anywhere</p>

        <HeroImage src='../static/instachrome.jpg' />

        <CtaButton link='https://chrome.google.com/webstore/detail/dffakiimcpeogagieklcdchklmghdnhd'>Add to Google chrome</CtaButton>

        <h2 style={{marginTop: '8rem'}}>How to video</h2>
        <p style={{maxWidth: '60rem', margin: '0 auto'}}>After installing the chrome extension, click the icon and you should be good to go!</p>

        <Frame src='https://www.youtube.com/embed/IC9JDy6i4-s' />
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
    `}</style>
  </div>
)
