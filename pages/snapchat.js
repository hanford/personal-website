import Link from 'next/link'

import { Head } from '../components'

export default () => (
  <div className='container'>
    <Head />

    <div className='snapcode'>
      <img src='../static/snapcode.png' />
      <Link href='/'>
        <button className='backButton'>Back</button>
      </Link>
    </div>

    <style jsx>{`
      .container {
        display: flex;
        max-width: 100%;
        height: 100%;
        justify-content: center;
      }

      .snapcode {
        max-width: 100%;
        max-width: 20rem;
        display: flex;
        flex-direction: column;
        align-self: center;
      }

      .backButton {
        background-color: transparent;
        margin-top: 3rem;
        color: white;
        border: 0;
        font-size: 1.6rem;
        cursor: pointer;
        outline: none;
      }

      img {
        height: 20rem;
      }
    `}</style>
  </div>
)
