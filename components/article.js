import Link from 'next/link'

export const Article = ({path, name, about, stars = '', language = ''}) => (
  <Link href={path}>
    <a
      target='_blank'
      className='container'
    >
      <h4 className='project-title'>{name}</h4>

      <p className='project-about'>{about}</p>

      <div className='other'>{language}</div>

      <style jsx>{`
        .container {
          display: block;
          padding: 1rem;
          transition: all 0.2s linear;
          border-radius: 0.4rem;
        }

        .container:hover {
          transform: scale(1.05);
          background-color: rgba(0,0,0,0.05)
        }

        .other {
          font-size: 1.2rem;
          opacity: 0.5;
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
