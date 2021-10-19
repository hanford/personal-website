import {
  Container,
  CtaButton,
  Description,
  Card,
  Frame,
  Head,
  HeroImage,
  ButtonRow,
  Title,
} from "../components";
import withSegment from "../hocs/segment";
import withTakedown from "../hocs/takedown";

function Instachrome() {
  return (
    <Container>
      <Head
        title="Instachrome | Jack Hanford"
        description="Browse instagram from anywhere"
      />

      <Card>
        <Title>Instachrome</Title>
        <Description>Browse instagram from anywhere</Description>

        <HeroImage src="../static/instachrome.jpg" />

        <ButtonRow>
          <CtaButton
            target="_blank"
            link="/static/instachrome.zip"
            download="Instachrome.zip"
          >
            Download .zip
          </CtaButton>
          <CtaButton link="https://github.com/hanford/Instachrome">
            Star on Github
          </CtaButton>
        </ButtonRow>

        <h2 style={{ marginTop: "8rem" }}>How to video</h2>
        <p style={{ maxWidth: "60rem", margin: "0 auto" }}>
          After installing the chrome extension, click the icon and you should
          be good to go!
        </p>

        <Frame src="https://www.youtube.com/embed/IC9JDy6i4-s" />
      </Card>
    </Container>
  );
}

const hasTakedown = withTakedown(Instachrome);

export default withSegment(hasTakedown);
