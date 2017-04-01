import Link from 'next/link'
import Head from '../components/head'

// <img src='../static/me.jpg' className='profer' />
// <Link prefetch href='/projects'>
//  <button>Open source</button>
// </Link>

const name = (
  <span style={{fontWeight: 600}}>Jack Hanford</span>
)

export default () => (
  <div className='body'>
    <Head />

    <div className='container'>
      <div className='card'>
        <div className='waver'>👋</div>

        <div className='intro'>
          Hi I'm {name}
          <br />
          <br />
          I'm working as a senior software engineer at <a href='https://eaze.com' target='_blank'>Eaze</a>. 
        </div>

        <div className='button-row'>
          <div>
            <Link prefetch href='/projects'>
              <button className='beauty-button'>Projects</button>
            </Link>
            <Link prefetch href='/work'>
              <button className='beauty-button'>Work</button>
            </Link>
          </div>
          <button className='beauty-button'>Contact me</button>
        </div>
        <p className='abt-me'>Lately I've been obssessed with open source software, which I keep <a href='https://github.com/hanford' target='_blank'>on github</a>. I've been writing JavaScript profressionally for around 3 years, and have become an expert with some of the latest and greatest frontend frameworks including <a href='https://www.npmjs.com/package/virtual-dom' target='_blank'>virtual-dom</a>, <a href='https://angular.io' target='_blank'>AngularJS</a> and <a href='https://facebook.github.io/react' target='_blank'>ReactJS</a>.</p>
      </div>
    </div>

    <style jsx>{`
      .body {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
      }

      .container {
        width: 48rem;
        max-width: 100%;
      }

      .intro {
        line-height: 1.8rem;
        letter-spacing: 0.03em;
        margin: 1rem 0 2rem;
      }

      .card {
        box-shadow: 0 18px 35px rgba(50,50,93,.1), 0 8px 15px rgba(0,0,0,.07);
        background-color: #f6f9fc;
        color: #32325d;
        border-radius: 0.4rem;
        padding: 2rem;
        margin-top: 8rem;
      }

      .button-row {
        display: flex;
        margin: 1rem 0 2rem;
      }

      .button-row button {
        margin-right: 1rem;
      }

      .beauty-button {
        display: inline-block;
        line-height: 4rem;
        padding: 0 1.4rem;
        box-shadow: 0 0.4rem 0.6rem rgba(50,50,93,.11), 0 0.1rem 0.3rem rgba(0,0,0,.08);
        background: #fff;
        border-radius: 0.4rem;
        font-size: 1.2rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: .025em;
        color: #32325d;
        text-decoration: none;
        border: 0px;
        cursor: pointer;
        outline: none;
        transition: all 0.25s ease-out;
      }

      .beauty-button:hover {
        transform: translateY(-0.5rem);
        color: #1461f4;
      }

      .waver {
        font-size: 4rem;
        animation: waving 0.25s linear;
      }

      @keyframes waving {
        from {
          transform: scale(0.5);
          opacity: 0;
        }
        to {
          transform: scale(1);
          opacity: 1;
        }
      }
    `}</style>
  </div>
)
