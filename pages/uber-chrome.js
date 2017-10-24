import React from 'react'
import Link from 'next/link'
import GithubBadge from 'react-github-badge'

import { Head, CtaButton, HeroImage, Title, Frame, Content } from '../components'

export default function UberChrome () {
  return (
    <div className='container'>
      <Head
        title='Uber chrome | Jack Hanford'
        description='Call an uber from chrome'
      />

      <GithubBadge
        url='https://github.com/hanford/uber-chrome'
        title='Star on Github'
      />

      <Content>
        <Title>Uber chrome</Title>

        <p style={{marginTop: '0.5rem', marginBottom: '3rem'}}>Call an uber from chrome</p>

        <HeroImage src='../static/uber-chrome.jpg' />

        <CtaButton link='https://chrome.google.com/webstore/detail/uberchrome/foakblnhnfmanccjhkkcicepglbflaff'>Add to Google chrome</CtaButton>

        <h2 style={{marginTop: '8rem'}}>How to video</h2>
        <p style={{maxWidth: '60rem', margin: '0 auto'}}>After installing the chrome extension, click the icon and you should be ready!</p>

        <Frame src='https://www.youtube.com/embed/4rXzuy_fGsU' />
      </Content>

      <style jsx>{`
        .container {
          display: flex;
          max-width: 100%;
          height: 100%;
          justify-content: center;
          text-align: center;
          overflow: hidden !important;
        }
      `}</style>
    </div>
  )
}
