import Link from 'next/link'

import Head from '../../components/head'
import projects from './projects'

export default () => (
  <div>
    <Head title='Jack Hanford | Projects' />
    <Link href='/'><a>Back</a></Link>

    <div className='container'>
      <div>Projects</div>
      <div>I started writing JavaScript professionally 5 years ago.</div>

      <div>
        {
          projects.map((p, index) => {
            console.log(p)
            return (
              <div key={index}>{p.name}</div>
            )
          })
        }
      </div>
    </div>

    <style jsx>{`
      .container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border: 1px solid black;
        font-size: 1.6rem;
        max-width: 76rem;
        margin: 3rem auto;
      }
    `}</style>
  </div>
)
