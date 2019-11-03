import styled from 'react-emotion';

import { Head } from '../components';
import withSegment from '../hocs/segment';

function Snapchat() {
  return (
    <Container>
      <Head title="Github Trends | Jack Hanford" />
      <Page width="700">
        <div>
          <Icon src="../static/github-trends.png"  />
          <Heading>Github Trends</Heading>
          <P>Mac OS and iOS app for browsing trending github repos</P>
        </div>

        <div>
          <LightPhone src="../static/trends-light.png" />
          <DarkPhone src="../static/trends-dark.png" />
        </div>
      </Page>

      <Page width="1100">
        <div>
          <LightMac src="../static/trends-light-mac.png" />
          <DarkMac src="../static/trends-dark-mac.png" />
        </div>

        <PlatformCopy>
          <Heading>Desktop and mobile</Heading>
          <P>Github trends is written with Swift UI, so it's code runs on all apple devices</P>
        </PlatformCopy>
      </Page>
    </Container>
  );
}

const P = styled.p`
  line-height: 24px;
`

const PlatformCopy = styled.div`
  padding-left: 100px;

  @media(max-width: 800px) {
    padding-left: 0;
  }
`

const Icon = styled.img`
  height: 7rem;
  border-radius: 16px;
  box-shadow: 0 0px 20px rgba(0,0,0,0.1);
`;

const Heading = styled.div`
  font-weight: 600;
  font-size: 34px;
  margin-top: 24px;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 100%;
  min-height: 100vh;
  padding: 16px;

  @media (prefers-color-scheme: dark) {
    background: black;
    color:  #ddd;
  }
  
  @media (prefers-color-scheme: light) {
    background: white;
    color:  black;
  }
`;

const Page = styled.div`
  max-width: 100%;
  width: ${({ width }: any) => width}px;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 100vh;

  @media(max-width: 800px) {
    flex-direction: column;
  }
`;

const LightPhone = styled.img`
  margin: 0 36px;
  max-width: 320px;
  width: 100%;

  @media(max-width: 800px) {
    margin: 36px auto;
  }

  @media(max-width: 800px) {
    flex-direction: column;
  }

  @media (prefers-color-scheme: dark) {
    display: none;
  }
`
const DarkPhone = styled.img`
  margin: 0 36px;
  max-width: 320px;
  width: 100%;

  @media(max-width: 800px) {
    margin: 36px auto;
  }

  @media(max-width: 800px) {
    flex-direction: column;
  }

  @media (prefers-color-scheme: light) {
    display: none;
  }
`

const LightMac = styled.img`
  margin: 0 0 0 36px;
  max-width: 600px;
  width: 100%;

  @media(max-width: 800px) {
    margin: 36px auto;
  }

  @media(max-width: 800px) {
    flex-direction: column;
  }

  @media (prefers-color-scheme: dark) {
    display: none;
  }
`
const DarkMac = styled.img`
  margin: 0 0 0 36px;
  max-width: 600px;
  width: 100%;

  @media(max-width: 800px) {
    margin: 36px auto;
  }

  @media(max-width: 800px) {
    flex-direction: column;
  }

  @media (prefers-color-scheme: light) {
    display: none;
  }
`

export default withSegment(Snapchat);
