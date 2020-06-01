import styled from "react-emotion";

if (typeof window !== "undefined") {
  // tslint:disable-next-line
  require("intersection-observer");
}

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
    background: #333;
  }

  @media (max-width: 767px) {
    padding: 2rem;
  }
`;

const Navbar = styled.nav`
  width: 100%;
  position: fixed;
  height: 6rem;
  z-index: 100;
  top: 0;
  font-weight: 900;
  color: #d40052;
  font-size: 1.8rem;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  -webkit-backdrop-filter: saturate(180%) blur(20px);
  backdrop-filter: saturate(180%) blur(20px);
  background-color: rgba(255, 255, 255, 0.75) !important;

  transform: translateY(${({ hide }: { hide: boolean }) => (hide ? -6 : 0)}rem);
  transition: all 0.4s;
`;
