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
    <>
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

          <div className="section">
            <h3>Downloads</h3>

            <div className="row">
              <a
                target="_blank"
                href="https://github.com/hanford/chirp/suites/4014076500/artifacts/101365603"
                download="Chirp.zip"
              >
                Mac
              </a>

              <a
                target="_blank"
                href="https://github.com/hanford/chirp/suites/4014076500/artifacts/101365602"
                download="Chirp.zip"
              >
                Linux
              </a>

              <a
                target="_blank"
                href="https://github.com/hanford/chirp/suites/4014076500/artifacts/101365604"
                download="Chirp.zip"
              >
                Windows
              </a>
            </div>
          </div>

          <h2 style={{ marginTop: "14rem" }}>Video</h2>

          <Frame src="https://www.youtube.com/embed/OfysGhGIHp8" />
        </Content>
      </Container>
      <style jsx>
        {`
          .section {
            display: flex;
            flex-direction: column;
            margin-top: 6rem;
          }

          .row {
            display: flex;
            flex-direction: row;
            justify-cotent: space-between;
            margin: auto;
          }

          @media (max-width: 768px) {
            .row {
              flex-direction: column;
            }
          }

          a {
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
          }

          @media (prefers-color-scheme: dark) {
            a {
              color: rgba(255, 255, 255, 0.9);
              border: 2px solid rgba(255, 255, 255, 0.9);
            }
          }

          @media (max-width: 767px) {
            a {
              margin-bottom: 1rem;
            }
          }
        `}
      </style>
    </>
  );
}

export default withSegment(Chirp);
