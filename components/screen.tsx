import styled from "react-emotion";

interface Props {
  children: React.ReactNode;
}

export function Screen({ children }: Props) {
  return (
    <>
      <Container>
        <Card>{children}</Card>
      </Container>
    </>
  );
}

const Container = styled.div`
  max-width: 100%;
  padding: 8rem 2rem;
  will-change: transform;

  @media (max-width: 767px) {
    padding: 2rem;
  }
`;

const Card = styled.div`
  width: 76rem;
  max-width: 100%;
  padding: 4rem;
  position: relative;
  margin: 0 auto;
  background-color: white;
  border-radius: 0.4rem;

  @media (prefers-color-scheme: dark) {
    background: #0e0e0e;
  }

  @media (max-width: 767px) {
    padding: 2rem;
  }
`;
