import Link from 'next/link'

export const BackButton = () => (
  <div>
    <Link href='/'>
      <a style={{position: 'absolute', top: '2rem', right: '2rem', fontSize: '3rem'}}>×</a>
    </Link>

    <style jsx>{`
      a {
        color: #d40052;
        font-weight: 600;
        text-decoration: none;
      }
    `}</style>
  </div>
)
