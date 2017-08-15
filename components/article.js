import Link from 'next/link'

export const Article = ({path, name, about, stars = '', language = ''}) => (
  <Link href={path}>
    <a
      target='_blank'
      className='container'
    >
      <h4 className='project-title'>{name}</h4>

      <p className='project-about'>{about}</p>

      <div className='other-container' style={{display: language ? 'flex' : 'none'}}>
        <div className='other'>⭐️ {stars}</div>
        <div style={{marginLeft: '1rem'}}>·</div>
        <div className='other' style={{marginLeft: '1rem'}}>{language}</div>
      </div>

      <style jsx>{`
        .container {
          display: block;
          transition: all 0.2s linear;
          border-radius: 0.4rem;
          border: 1px solid transparent;
          padding: 1rem;
          margin-left: -1rem;
          margin-right: -1rem;
        }

        .container:hover {
          border: 1px solid #d40052;
        }

        .other-container {
          display: flex;
          align-items: center;
        }

        .other {
          font-size: 1.2rem;
          opacity: 0.75;
          font-weight: bold;
        }

        a {
          text-decoration: none;
          color: black;
        }

        .project-title {
          color: #d40052;
          margin: 0;
          font-size: 1.8rem;
        }

        .project-about {
          margin: 0;
        }
      `}</style>
    </a>
  </Link>
)

export default Article
