import styled from "react-emotion";
import GithubBadge from "react-github-badge";

import {
  Container,
  Description,
  Frame,
  Head,
  HeroImage,
  Title,
  Content,
} from "../components";

import withSegment from "../hocs/segment";

function Chirp() {
  return (
    <Container>
      <Head
        title="Chirp | Jack Hanford"
        description="A desktop twitter application built for all platforms"
      />

      <GithubBadge
        url="https://github.com/hanford/chirp"
        title="Star on Github"
      />

      <Content>
        <Title>
          Chirp <span style={{ fontSize: "3rem" }}>🐦</span>
        </Title>
        <Description>
          A desktop twitter application built for all platforms
        </Description>

        <HeroImage src="../static/chirp.jpg" />

        <Section>
          <h3>Downloads</h3>

          <Row>
            <Button
              target="_blank"
              href="https://file-cjddyxvqbc.now.sh/Chirp-darwin-x64.zip"
              download="Chirp.zip"
            >
              Mac
            </Button>

            <Button
              target="_blank"
              href="https://file-fevwnujbqw.now.sh/Chirp-linux-x64.zip"
              download="Chirp.zip"
            >
              Linux
            </Button>

            <Button
              target="_blank"
              href="https://file-pwszcfrfqv.now.sh/Chirp-win32-x64.zip"
              download="Chirp.zip"
            >
              Windows
            </Button>
          </Row>
        </Section>

        <h2 style={{ marginTop: "14rem" }}>Video</h2>

        <Frame src="https://www.youtube.com/embed/OfysGhGIHp8" />
      </Content>
    </Container>
  );
}

export default withSegment(Chirp);

const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 6rem;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-cotent: space-between;
  margin: auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Button = styled.a`
  display: block;
  line-height: 4rem;
  padding: 0 1.4rem;
  box-shadow: 0 0.4rem 0.6rem rgba(50, 50, 93, 0.1);
  border-radius: 0.4rem;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.025em;
  text-decoration: none;
  width: 120px;
  border: 0px;
  cursor: pointer;
  outline: none;
  transition: all 0.25s ease-out;
  border: 2px solid #db594b;
  color: #db594b;
  font-weight: bold;
  font-family: Brandon;
  background-color: transparent;
  margin-right: 1rem;

  @media (prefers-color-scheme: dark) {
    border: 2px solid rgba(255, 255, 255, 0.9);
    color: rgba(255, 255, 255, 0.9);
  }
`;
