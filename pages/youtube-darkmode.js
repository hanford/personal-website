import { PureComponent } from 'react'
import Link from 'next/link'
import GithubBadge from 'react-github-badge'

import { Head, CtaButton, Title, HeroImage, Frame, Content, Description, Container } from '../components'

export default class YoutubeDarkmode extends PureComponent {
  render () {
    return (
      <Container>
        <Head
          title='Youtube Darkmode | Jack Hanford'
          description='Get youtube darkmode, before google releases it'
        />

        <GithubBadge
          url='https://github.com/hanford/youtube-darkmode'
          title='Star on Github'
        />

        <Content>
          <Title>Youtube Darkmode</Title>
          <Description>Google is redesigning youtube and also adding darkmode, this enables it right now</Description>

          <HeroImage src='../static/darkmode.jpg' />

          <CtaButton link='https://chrome.google.com/webstore/detail/ajngaombckgmodafdnmipfmcfgppnnhp'>Add to Google chrome</CtaButton>

          <h2 style={{marginTop: '8rem'}}>How to video</h2>
          <p style={{maxWidth: '60rem', margin: '0 auto'}}>After installing the chrome extension, simply go to youtube and click "ok", and you'll load up the new youtube interface, from there you can enable darkmode or just enjoy the new white interface.</p>

          <Frame src='https://www.youtube.com/embed/plz6bGOb3VI' />
        </Content>
      </Container>
    )
  }
}
