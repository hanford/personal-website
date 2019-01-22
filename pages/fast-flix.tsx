import GithubBadge from 'react-github-badge';

import {
  Container,
  Content,
  CtaButton,
  Description,
  Frame,
  Head,
  HeroImage,
  Title,
} from '../components';

import withSegment from '../hocs/segment';

function FastFlix () {
  return (
    <Container>
      <Head
        title="Fast Flix | Jack Hanford"
        description="Modify playback speed of any video on netflix"
      />

      <GithubBadge
        url="https://github.com/hanford/fast-flix"
        title="Star on Github"
      />

      <Content>
        <Title>Fast Flix 🍿</Title>
        <Description>
          Modify playback speed of any video on netflix
        </Description>

        <HeroImage src="../static/fast-flix.jpg" />

        <CtaButton link="https://chrome.google.com/webstore/detail/ldcailklfommolipjecojcgodjdoaedi">
          Add to Google chrome
        </CtaButton>

        <h2 style={{ marginTop: '8rem' }}>How to video</h2>
        <p style={{ maxWidth: '60rem', margin: '0 auto' }}>
          After installing the chrome extension, click the icon and you should
          be good to go!
        </p>

        <Frame src="https://www.youtube.com/embed/D2ry16dNEIY" />
      </Content>
    </Container>
  )
}
export default withSegment(FastFlix);
