import Link from 'next/link'

import Head from '../../components/head'

export default () => (
  <div className='container'>
    <Head />

    <div className='hero'>
      <div className='content'>
        <h1 style={{marginBottom: '0'}}>Instachrome</h1>
        <p style={{marginTop: '0.5rem', marginBottom: '3rem'}}>Browse instagram from anywhere</p>
        <img src='../static/instachrome.png' />

        <button className='backButton'>Add to chrome</button>

        <div style={{marginTop: '2rem'}}>
          <iframe
            src='https://ghbtns.com/github-btn.html?user=hanford&repo=Instachrome&type=star&count=true&size=small'
            frameBorder='0'
            scrolling='0'
            width='80px'
            height='30px'
          />
        </div>
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
        color: rgba(10,10,10,0.6);
        margin: 6rem 0;
        min-height: 60rem;
      }

      .content {
        display: flex;
        flex-direction: column;
      }

      .backButton {
        background-color: transparent;
        border: 0;
        font-size: 1.6rem;
        cursor: pointer;
        outline: none;
        margin-top: 4rem;
      }

      img {
        width: 100%;
        max-width: 60rem;
        box-sizing: border-box;
        margin: 0 auto;
        border: 1px solid rgba(0,0,0,0.2);
        box-shadow: 0 0.4rem 4rem rgba(0,0,0,0.2);
      }
    `}</style>
  </div>
)
