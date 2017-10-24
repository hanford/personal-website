export const Description = ({ children }) => (
  <div>
    <p className='description'>{children}</p>

    <style jsx>{`
      .description {
        margin-top: 0.5rem;
        margin-bottom: 3rem;
      }
    `}</style>
  </div>
)

export default Description
