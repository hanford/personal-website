import Link from 'next/link'

export default () => (
  <div>
    <Link href='/'><a>Back</a></Link>

    <div className='container'>
      <div>Projects</div>
    </div>

    <style jsx>{`
      .container {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid black;
        height: 60px;
        margin-top: 30px;
      }
    `}</style>
  </div>
)
