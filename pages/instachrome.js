import React from 'react'
import Link from 'next/link'
import GithubBadge from 'react-github-badge'

import { Head, CtaButton, HeroImage, Title, Frame, Content, Description, Container } from '../components'

export default function Instachrome () {
  return (
    <Container>
      <Head
        title='Instachrome | Jack Hanford'
        description='Browse instagram from anywhere'
      />

      <GithubBadge
        url='https://github.com/hanford/Instachrome'
        title='Star on Github'
      />

      <Content>
        <Title>Instachrome</Title>
        <Description>Browse instagram from anywhere</Description>

        <HeroImage src='../static/instachrome.jpg' />

        <CtaButton link='https://chrome.google.com/webstore/detail/dffakiimcpeogagieklcdchklmghdnhd'>Add to Google chrome</CtaButton>

        <h2 style={{marginTop: '8rem'}}>How to video</h2>
        <p style={{maxWidth: '60rem', margin: '0 auto'}}>After installing the chrome extension, click the icon and you should be good to go!</p>

        <Frame src='https://www.youtube.com/embed/IC9JDy6i4-s' />
      </Content>
    </Container>
  )
}
