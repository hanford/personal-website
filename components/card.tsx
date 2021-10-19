interface Props {
  children: React.ReactNode;
}

export function Card({ children }: Props) {
  return (
    <>
      <div className="container">
        <div className="card">{children}</div>
      </div>

      <style jsx>{`
        .container {
          max-width: 100%;
          padding: 8rem 2rem;
        }

        .card {
          width: 76rem;
          max-width: 100%;
          padding: 4rem;
          position: relative;
          margin: 0 auto;
          margin-bottom: 4rem;
          background-color: white;
          border-radius: 0.4rem;
        }

        @media (prefers-color-scheme: dark) {
          .card {
            background: #0e0e0e;
          }
        }

        @media (max-width: 767px) {
          .card,
          .container {
            padding: 2rem;
          }

          .card {
            width: 100%;
            margin-top: 4rem;
          }
        }
      `}</style>
    </>
  );
}
