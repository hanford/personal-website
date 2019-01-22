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
import withTakedown from '../hocs/takedown';

function Instachrome () {
  return (
    <Container>
      <Head
        title="Instachrome | Jack Hanford"
        description="Browse instagram from anywhere"
      />

      <GithubBadge
        url="https://github.com/hanford/Instachrome"
        title="Star on Github"
      />

      <Content>
        <Title>Instachrome</Title>
        <Description>Browse instagram from anywhere</Description>

        <HeroImage src="../static/instachrome.jpg" />

        <CtaButton
          target="_blank"
          link="/static/instachrome.zip"
          download="Instachrome.zip"
        >
          Download .zip
        </CtaButton>

        <h2 style={{ marginTop: '8rem' }}>How to video</h2>
        <p style={{ maxWidth: '60rem', margin: '0 auto' }}>
          After installing the chrome extension, click the icon and you should
          be good to go!
        </p>

        <Frame src="https://www.youtube.com/embed/IC9JDy6i4-s" />
      </Content>
    </Container>
  )
}

const hasTakedown = withTakedown(Instachrome);

export default withSegment(hasTakedown);
