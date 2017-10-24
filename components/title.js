export const Title = ({ children }) => (
  <div>
    <h1 className='title'>{children}</h1>

    <style jsx>{`
      .title {
        letter-spacing: 0.03em;
        font-size: 2.4rem;
        font-weight: 700;
        margin: 0;
      }
    `}</style>
  </div>
)

export default Title
