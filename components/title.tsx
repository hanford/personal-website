export const Title = ({
  children,
  styles,
}: {
  children: React.ReactNode;
  styles: React.StyleHTMLAttributes<HTMLHeadingElement>;
}) => (
  <h1 style={styles}>
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
