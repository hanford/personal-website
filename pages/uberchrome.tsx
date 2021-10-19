import React from "react";

import {
  Container,
  CtaButton,
  Description,
  Frame,
  Card,
  Head,
  HeroImage,
  ButtonRow,
  Title,
} from "../components";

import withSegment from "../hocs/segment";
import withTakedown from "../hocs/takedown";

function UberChrome() {
  return (
    <Container>
      <Head
        title="Uber chrome | Jack Hanford"
        description="Call an uber from chrome"
      />

      <Card>
        <Title>Uber chrome</Title>

        <Description>Call an uber from chrome</Description>

        <HeroImage src="../static/uber-chrome.jpg" />

        <ButtonRow>
          <CtaButton disabled={true}>Add to Google chrome</CtaButton>
          <CtaButton link="https://github.com/hanford/uber-chrome">
            Star on Github
          </CtaButton>
        </ButtonRow>

        <h2 style={{ marginTop: "8rem" }}>How to video</h2>
        <p style={{ maxWidth: "60rem", margin: "0 auto" }}>
          After installing the chrome extension, click the icon and you should
          be ready!
        </p>

        <Frame src="https://www.youtube.com/embed/4rXzuy_fGsU" />
      </Card>
    </Container>
  );
}

const hasTakedown = withTakedown(UberChrome);

export default withSegment(hasTakedown);
