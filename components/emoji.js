import { Fragment } from 'react'

export const Emoji = ({ children }) => (
  <Fragment>
    <div className='emoji'>{children}</div>

    <style jsx>{`
      .emoji {
        font-size: 4rem;
      }
    `}</style>
  </Fragment>
)

export default Emoji
