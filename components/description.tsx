export const Description = ({ children }: { children: React.ReactNode }) => (
  <>
    <p className="description">{children}</p>
    <style jsx>{`
      .description {
        margin-top: 0.5rem;
        margin-bottom: 3rem;
      }
    `}</style>
  </>
);

export default Description;
