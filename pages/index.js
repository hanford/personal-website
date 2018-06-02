import React, { PureComponent } from 'react'
import Link from 'next/link'
import Drawer from 'react-drag-drawer'
import styled from 'react-emotion'
import { Motion, spring, presets } from 'react-motion'
import withSegment from '../hocs/segment'

import { SocialModal, Head, Article, Screen, Emoji } from '../components'

class Landing extends PureComponent {
  state = {
    expanded: false
  }

  toggle = () => {
    this.setState((state) => {
      return {
        expanded: !state.expanded
      }
    })
  }

  componentDidMount () {
    window.addEventListener('beforeinstallprompt', function (event) {
      event.userChoice.then(function(choiceResult) {
        console.log(choiceResult.outcome)

        if(choiceResult.outcome == 'dismissed') {
          console.log('User cancelled home screen install')
        } else {
          console.log('User added to home screen')
        }
      })
    })
  }

  render () {
    const { expanded } = this.state

    return (
      <Body>
        <Head />

        <Motion style={{shrink: spring(expanded ? 0.8 : 1, presets.stiff)}}>
          {({ shrink }) => (
            <Screen scale={shrink}>
              <Emoji>👋</Emoji>
              <Intro>
                <div>Hi I'm <span style={{fontWeight: 600}}>Jack Hanford</span></div>
                <div>I'm a senior software engineer at <Anchor href='https://eaze.com' target='_blank'>Eaze</Anchor>.</div>
              </Intro>

              <Row>
                <Link prefetch href='/projects'>
                  <Button>Projects</Button>
                </Link>
                <Button onClick={this.toggle}>Contact me</Button>
              </Row>

              <Title>Projects</Title>

              {
                projects.map(p => (
                  <Article
                    key={p.kname}
                    path={p.path}
                    name={p.name}
                    about={p.about}
                  />
                ))
              }
            </Screen>
          )}
        </Motion>

        <SocialModal open={expanded} toggle={this.toggle} />
      </Body>
    )
  }
}

export default withSegment(Landing)

const Body = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  justify-content: center;
  flex-direction: column;
  color: #32325d;
  font-size: 1.6rem;
`

const Anchor = styled.a`
  color: #d40052;
  font-weight: 600;
  text-decoration: underline;
`

const Intro = styled.div`
  font-size: 2rem;
  line-height: 2rem;
  letter-spacing: 0.03em;
  margin: 1rem 0 2rem;

  & > div:first-child {
    margin-bottom: 2rem;
  }

  & > div:last-child {
    line-height: 2rem
    font-size: 1.6rem;
  }
`

const Button = styled.button`
  display: block;
  line-height: 4rem;
  padding: 0 1.4rem;
  box-shadow: 0 0.4rem 0.6rem rgba(50,50,93,.10);
  background: #fff;
  border-radius: 0.4rem;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: .025em;
  text-decoration: none;
  border: 0px;
  cursor: pointer;
  outline: none;
  transition: all 0.25s ease-out;
  border: 2px solid #db594b;
  color: #db594b;
  font-weight: bold;
  font-family: Brandon;
  width: 100%;

  &:first-of-type {
    margin-right: 1rem;
  }

  &:hover {
    background-color: #db594b;
    color: white;
  }
`

const Row = styled.div`
  display: flex;
  margin: 1rem auto;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

const Title = styled.div`
  margin: 4rem -1rem 1rem;
  font-size: 2rem;
  line-height: 2rem;
  padding: 0 1rem;
  letter-spacing: 0.03em;
  font-weight: bold;
`

const projects = [
  {
    path: 'https://www.youtube.com/watch?v=JjRV-l9jSYE',
    name: 'Rewriting Eaze.com with Next.js',
    about: 'On 4/28/18 I gave a ~15 minute talk at Zeit Day about my experience rewriting a large consumer facing website with Next.js',
  },
  {
    path: '/trends',
    name: 'Trends ⭐️',
    about: 'Ultra high performance github trending PWA built with Next.js and Redux but only ~10 lines of client side Javascript',
  },
  {
    path: '/fast-flix',
    name: 'Fast Flix 🍿',
    about: 'Change the playback rate of any video on netflix',
  },
  {
    path: '/uber-chrome',
    name: 'Uber chrome',
    about: 'A chrome extension allowing you to order and uber from your desktop',
  },
  {
    path: '/instachrome',
    name: 'Instachrome',
    about: 'A chrome extension for browsing instagram with around 11,000 active users',
  },
  {
    path: '/chirp',
    name: 'Chirp 🐦',
    about: 'A desktop twitter application built for all platforms',
  },
  {
    path: 'https://react-drag-drawer.jackhanford.com',
    name: 'React Drag Drawer',
    about: 'Mobile first ReactJS modal component with native touch gesture support',
  },
  {
    path: 'https://react-kanban.jackhanford.com',
    name: 'React Kanban',
    about: 'Custom react drag and drop interface built trello style but with better animations',
  },
  {
    path: 'https://react-fab-fan.jackhanford.com',
    name: 'React Fab Fan',
    about: 'A material design inspired floating action button animation built with physics',
  },
  {
    path: '/youtube-darkmode',
    name: 'Youtube darkmode',
    about: 'Google was redesigning youtube and also adding darkmode, this enables it right now',
  }
]
