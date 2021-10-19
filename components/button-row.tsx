export const ButtonRow = ({ children }: { children: React.ReactNode }) => (
  <>
    <div className="row">{children}</div>
    <style jsx>{`
      .row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: auto;
        gap: 1.6rem;
        max-width: 60rem;
        width: 80%;
        margin-top: 4rem;
      }

      @media (max-width: 768px) {
        .row {
          gap: 1.6rem;
          flex-direction: column;
        }
      }
    `}</style>
  </>
);

export default ButtonRow;
