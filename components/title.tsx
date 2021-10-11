export const Title = ({ children }: { children: React.ReactNode }) => (
  <h1>
    {children}
    <style jsx>{`
      h1 {
        letter-spacing: 0.03em;
        font-size: 2.4rem;
        font-weight: 700;
        margin: 0;
      }
    `}</style>
  </h1>
);

export default Title;
