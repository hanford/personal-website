export default ({ content }) => (
  <div>
    <div className='title'>{content}</div>
    <style jsx>{`
      .title {
        letter-spacing: 0.03em;
        font-size: 2rem;
        font-weight: 700;
      }
    `}</style>
  </div>
)
