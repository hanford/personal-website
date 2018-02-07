import { PureComponent } from 'react'
import GithubBadge from 'react-github-badge'
import styled from 'react-emotion'

import { Head, CtaButton, HeroImage, Title, Description, Frame, Container } from '../components'

export default class Chirp extends PureComponent {
  render () {
    return (
      <Container>
        <Head
          title='Chirp | Jack Hanford'
          description='A desktop twitter application built for all platforms'
        />

        <GithubBadge
          url='https://github.com/hanford/chirp'
          title='Star on Github'
        />

        <Hero>
          <Title>Chirp <span style={{fontSize: '3rem'}}>🐦</span></Title>
          <Description>A desktop twitter application built for all platforms</Description>

          <HeroImage src='../static/chirp.jpg' />

          <Section>
            <h3>Downloads</h3>

            <Row>
              <Button
                target='_blank'
                href='https://file-cjddyxvqbc.now.sh/Chirp-darwin-x64.zip'
                download='Chirp.zip'
              >
                Mac
              </Button>

              <Button
                target='_blank'
                href='https://file-fevwnujbqw.now.sh/Chirp-linux-x64.zip'
                download='Chirp.zip'
              >
                Linux
              </Button>

              <Button
                target='_blank'
                href='https://file-pwszcfrfqv.now.sh/Chirp-win32-x64.zip'
                download='Chirp.zip'
              >
                Windows
              </Button>
            </Row>
          </Section>

          <h2 style={{marginTop: '14rem'}}>Video</h2>

          <Frame src='https://www.youtube.com/embed/OfysGhGIHp8' />
        </Hero>
      </Container>
    )
  }
}

const Hero = styled.div`
  max-width: 100%;
  width: 100%;
  background-color: white;
  color: rgba(0, 0, 0, 0.8);
  margin: 6rem 0;
  min-height: 60rem;
  padding: 2rem;
`

const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 6rem;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-cotent: space-between;
  margin: auto;

  @media(max-width: 768px) {
    flex-direction: column;
  }
`

const Button = styled.a`
  display: block;
  line-height: 4rem;
  padding: 0 1.4rem;
  box-shadow: 0 0.4rem 0.6rem rgba(50,50,93,.11), 0 0.1rem 0.3rem rgba(0,0,0,.08);
  background: #fff;
  border-radius: 0.4rem;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: .025em;
  color: #32325d;
  text-decoration: none;
  border: 0px;
  cursor: pointer;
  outline: none;
  transition: all 0.25s ease-out;
  border: 2px solid #db594b;
  color: #db594b;
  margin: 0 1.5rem;
  font-weight: bold;
  min-width: 20rem;


  @media(max-width: 768px) {
    margin: 1.5rem 0;
    min-width: 24rem;
  }
`
