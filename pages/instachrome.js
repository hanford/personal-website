import React, { PureComponent } from 'react'
import Link from 'next/link'
import GithubBadge from 'react-github-badge'
import Drawer from 'react-drag-drawer'
import styled, { css } from 'react-emotion'
import requestCallback from 'request-callback'

import { Head, CtaButton, HeroImage, Title, Frame, Content, Description, Container } from '../components'

const TakeDown = css`
  position: absolute;
  overflow: hidden;
  width: 100%;
  max-width: 767px;
  min-height: 100%;
  position: relative;
  margin-top: 20rem;
  background-color: white;
  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;
  padding: 1rem 2rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Emoji = styled.h1`
  font-size: 6rem;
`

const Button = styled.button`
  padding: 1.6rem;
  border: 2px solid grey;
  background-color: transparent;
  width: 100%;
  border-radius: 0.4rem;
  font-size: 1.6rem;
  margin-top: 2rem;
`

export default class Instachrome extends PureComponent {
  state = {
    open: false
  }

  toggleDrawer = () => {
    this.setState(() => {
      return {
        open: !this.state.open
      }
    })
  }

  componentDidMount () {
    requestCallback(this.toggleDrawer)
  }

  render () {
    return (
      <Container>
        <Head
          title='Instachrome | Jack Hanford'
          description='Browse instagram from anywhere'
          modalElementClass={TakeDown}
        />

        <GithubBadge
          url='https://github.com/hanford/Instachrome'
          title='Star on Github'
        />

        <Content>
          <Title>Instachrome</Title>
          <Description>Browse instagram from anywhere</Description>

          <Drawer
            onRequestClose={this.toggleDrawer}
            open={this.state.open}
            modalElementClass={TakeDown}
          >
            <Emoji>🙄</Emoji>
            <p>On 1/28/17 I received an email informing me of me that this extension was breaking chrome's terms of service around copyright infringement.  I've decided to remove the chrome extension from the chrome web store but keep the source code on <a href='https://github.com/hanford/Instachrome'>Github</a>.</p>
            <Button onClick={this.toggleDrawer}>Got it</Button>
          </Drawer>

          <HeroImage src='../static/instachrome.jpg' />

          <CtaButton onClick={this.toggleDrawer}>Add to Google chrome</CtaButton>

          <h2 style={{marginTop: '8rem'}}>How to video</h2>
          <p style={{maxWidth: '60rem', margin: '0 auto'}}>After installing the chrome extension, click the icon and you should be good to go!</p>

          <Frame src='https://www.youtube.com/embed/IC9JDy6i4-s' />
        </Content>
      </Container>
    )
  }
}
