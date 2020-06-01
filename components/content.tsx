import styled from "react-emotion";

const Outer = styled.div`
  max-width: 100%;
  width: 100%;
  background-color: white;
  color: rgba(0, 0, 0, 0.8);
  padding: 2rem 0;
  margin-top: 6rem;
  min-height: 60rem;
  @media (prefers-color-scheme: dark) {
    color: rgba(255, 255, 255, 0.9);
    background-color: transparent;
  }
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
`;

export const Content = ({ children }: { children: React.ReactNode }) => (
  <Outer>
    <Inner>{children}</Inner>
  </Outer>
);

export default Content;
