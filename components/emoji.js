export const Emoji = ({ children }) => (
  <div>
    <div className='emoji'>{children}</div>

    <style jsx>{`
      .emoji {
        font-size: 4rem;
      }
    `}</style>
  </div>
)

export default Emoji
