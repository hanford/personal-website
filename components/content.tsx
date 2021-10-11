export const Content = ({ children }: { children: React.ReactNode }) => (
  <>
    <div className="outer">
      <div className="inner">{children}</div>
    </div>
    <style jsx>{`
      .outer {
        max-width: 100%;
        width: 100%;
        background-color: white;
        color: rgba(0, 0, 0, 0.8);
        padding: 2rem 0;
        margin-top: 6rem;
        min-height: 60rem;
      }

      @media (prefers-color-scheme: dark) {
        .outer {
          color: rgba(255, 255, 255, 0.9);
          background-color: transparent;
        }
      }

      .inner {
        display: flex;
        flex-direction: column;
        width: 80%;
        margin: 0 auto;
      }
    `}</style>
  </>
);

export default Content;
