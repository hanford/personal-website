import Link from 'next/link'
import Head from '../components/head'

// <img src='../static/me.jpg' className='profer' />
// <Link prefetch href="/projects">
//  <button>Open source</button>
// </Link>

export default () => (
  <div>
    <Head />
    <div className='container'>
      <div className='waver'>👋</div>

        <div>Hi I'm <span style={{fontWeight: 600}}>Jack Hanford</span></div>
        <div>I'm a 23 year old senior software engineer</div>
        <div>Originally from Michigan, I'm currently calling San Francisco my home</div>

        <div className='row'>
          <Link prefetch href="/work">
            <button>Work</button>
          </Link>
          <Link prefetch href="/projects">
            <button>Projects</button>
          </Link>
        </div>
    </div>

    <style jsx>{`
      .profer {
        height: 160px;
        max-width: 100%;
        border-radius: 50%;
      }

      .row {
        display: flex;
      }

      .row button {
        margin-right: 1rem;
      }

      .container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        height: 100%;
        width: 100%;
        margin-top: 3rem;
        font-size: 1.6rem;
      }

      .container div {
        margin: 5px 0;
      }

      .waver {
        font-size: 4rem;
      }

      @keyframes waving {
        from {
          transform: rotate(10deg);
        }
        to {
          transform: rotate(-20deg);
        }
      }
    `}</style>
  </div>
)
