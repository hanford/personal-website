import Link from 'next/link'

import Head from '../../components/head'

export default () => (
  <div className='container'>
    <Head />

    <div className='star-container'>
      <a className='starOnGithub' href='https://github.com/hanford/Instachrome' target='_blank'>Star on Github</a>
    </div>

    <div className='hero'>
      <div className='content'>
        <h1 style={{marginBottom: '0'}}>Instachrome</h1>
        <p style={{marginTop: '0.5rem', marginBottom: '3rem'}}>Browse instagram from anywhere</p>
        <img src='../static/instachrome.png' />

        <a
          target='_blank'
          href='https://chrome.google.com/webstore/detail/dffakiimcpeogagieklcdchklmghdnhd'
          className='backButton'
        >
          Add to chrome
        </a>
      </div>
    </div>

    <style jsx>{`
      .star-container {
        overflow: hidden;
        position: absolute;
        top: 0;
        width: 100%;
        height: 20rem;
      }
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

      .starOnGithub {
        display: block;
        position: absolute;
        top: 3rem;
        right: -7rem;
        padding: .8em 1.5em;
        width: 15em;
        text-align: center;
        background-color: #0a1818;
        font-size: 1.2em;
        font-weight: 500;
        color: #fefefe;
        text-decoration: none;
        white-space: nowrap;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        -webkit-transform-origin: 50% 50%;
        transform-origin: 50% 50%;
        -webkit-transition: all .2s;
        transition: all .2s;
      }

      img {
        width: 100%;
        max-width: 60rem;
        box-sizing: border-box;
        margin: 0 auto;
        box-shadow: 0 0.4rem 4rem rgba(0, 0, 0, 0.35);
        border-radius: 4px;
      }
    `}</style>
  </div>
)
