import React from 'react'
import Link from 'next/link'
import GithubBadge from 'react-github-badge'

import { Head, CtaButton } from '../components'

export default () => (
  <div className='container'>
    <Head />

    <GithubBadge
      url='https://github.com/hanford/Instachrome'
      title='Star on Github'
    />

    <div className='hero'>
      <div className='content'>
        <h1 style={{marginBottom: '0'}}>Instachrome</h1>
        <p style={{marginTop: '0.5rem', marginBottom: '3rem'}}>Browse instagram from anywhere</p>
        <img src='../static/instachrome.jpg' />

        <CtaButton link='https://chrome.google.com/webstore/detail/dffakiimcpeogagieklcdchklmghdnhd'>Add to Google chrome</CtaButton>

        <h2 style={{marginTop: '8rem'}}>How to video</h2>
        <p style={{maxWidth: '60rem', margin: '0 auto'}}>After installing the chrome extension, click the icon and you should be good to go!</p>
        <br />
        <iframe width='100%' height='360' src='https://www.youtube.com/embed/IC9JDy6i4-s' frameborder='0' allowfullscreen />
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
