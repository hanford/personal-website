import React from 'react'
import Link from 'next/link'
import GithubBadge from 'react-github-badge'

import { Head, CtaButton, HeroImage } from '../components'

export default function UberChrome () {
  return (
    <div className='container'>
      <Head />

      <GithubBadge
        url='https://github.com/hanford/uber-chrome'
        title='Star on Github'
      />

      <div className='hero'>
        <div className='content'>
          <h1 style={{marginBottom: '0'}}>Uber Chrome</h1>
          <p style={{marginTop: '0.5rem', marginBottom: '3rem'}}>Call an uber from chrome</p>

          <HeroImage src='../static/uber-chrome.jpg' />

          <CtaButton link='https://chrome.google.com/webstore/detail/uberchrome/foakblnhnfmanccjhkkcicepglbflaff'>Add to Google chrome</CtaButton>

          <h2 style={{marginTop: '8rem'}}>How to video</h2>
          <p style={{maxWidth: '60rem', margin: '0 auto'}}>After installing the chrome extension, click the icon and you should be ready!</p>
          <br />
          <iframe width='100%' height='360' src='https://www.youtube.com/embed/4rXzuy_fGsU' frameborder='0' allowfullscreen></iframe>
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
