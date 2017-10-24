export const Content = ({ children }) => (
  <div className='container'>
    <div className='content'>{children}</div>

    <style jsx>{`
      .container {
        max-width: 100%;
        width: 100%;
        background-color: white;
        color: rgba(0, 0, 0, 0.8);
        padding: 2rem 0;
        margin-top: 6rem;
        min-height: 60rem;
      }

      .content {
        display: flex;
        flex-direction: column;
        width: 80%;
        margin: 0 auto;
      }
    `}</style>
  </div>
)

export default Content
