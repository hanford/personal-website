import {
  Container,
  Card,
  CtaButton,
  Description,
  Frame,
  ButtonRow,
  Head,
  HeroImage,
  Title,
} from "../components";
import withSegment from "../hocs/segment";

function YoutubeDarkmode() {
  return (
    <Container>
      <Head
        title="Youtube Darkmode | Jack Hanford"
        description="Get youtube darkmode, before google releases it"
      />

      <Card>
        <Title>Youtube Darkmode</Title>
        <Description>
          Google is redesigning youtube and also adding darkmode, this enables
          it right now
        </Description>

        <HeroImage src="../static/darkmode.jpg" />

        <ButtonRow>
          <CtaButton link="https://chrome.google.com/webstore/detail/ajngaombckgmodafdnmipfmcfgppnnhp">
            Add to Google chrome
          </CtaButton>
          <CtaButton link="https://github.com/hanford/youtube-darkmode">
            Star on Github
          </CtaButton>
        </ButtonRow>

        <h2 style={{ marginTop: "8rem" }}>How to video</h2>
        <p style={{ maxWidth: "60rem", margin: "0 auto" }}>
          After installing the chrome extension, simply go to youtube and click
          "ok", and you'll load up the new youtube interface, from there you can
          enable darkmode or just enjoy the new white interface.
        </p>

        <Frame src="https://www.youtube.com/embed/plz6bGOb3VI" />
      </Card>
    </Container>
  );
}

export default withSegment(YoutubeDarkmode);
