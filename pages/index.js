import React, { PureComponent } from 'react'
import Link from 'next/link'
import Drawer from 'react-drag-drawer'

import { SocialModal, Head, Article, Screen } from '../components'

export default class Landing extends PureComponent {

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

  render () {
    const { expanded } = this.state

    return (
      <div className='body'>
        <Head />

        <Screen>
          <div className='waver'>👋</div>
          <div className='intro'>
            <div>Hi I'm <span style={{fontWeight: 600}}>Jack Hanford</span></div>
            <div>I'm a senior software engineer at <a href='https://eaze.com' target='_blank'>Eaze</a>.</div>
          </div>

          <div className='button-row'>
            <Link prefetch href='/projects'>
              <a className='beauty-button'>Open source</a>
            </Link>
            <button className='beauty-button' onClick={this.toggle}>Contact me</button>
          </div>

          <div className='title'>
            Projects
          </div>

          <Article
            path='/fast-flix'
            name='Fast Flix 🍿'
            about='Change the playback rate of any video on the internet'
          />

          <Article
            path='/uber-chrome'
            name='Uber Chrome'
            about='A chrome extension allowing you to order and uber from your desktop'
          />

          <Article
            path='/instachrome'
            name='Instachrome'
            about='A chrome extension for browsing instagram with around 7,500 active users'
          />

          <Article
            path='/chirp'
            name='Chirp 🐦'
            about='A desktop twitter application built for all platforms'
          />

          <Article
            path='https://react-drag-drawer.jackhanford.com'
            name='React Drag Drawer'
            about='Mobile first ReactJS modal component with native touch gesture support'
          />

          <Article
            path='https://react-kanban.jackhanford.com'
            name='React Kanban'
            about='Custom react drag and drop interface built trello style but with better animations'
          />

          <Article
            path='https://react-fab-fan.jackhanford.com'
            name='React Fab Fan'
            about='A material design inspired floating action button animation built with physics'
          />

          <Article
            path='/youtube-darkmode'
            name='Youtube Darkmode 🐦'
            about='Google is redesigning youtube and also adding darkmode, this enables it right now'
          />
        </Screen>

        <Drawer
          open={expanded}
          onRequestClose={this.toggle}
        >
          <SocialModal toggle={this.toggle} />
        </Drawer>

        <style jsx>{`
          .body {
            width: 100%;
            display: flex;
            justify-content: center;
            position: relative;
            justify-content: center;
            flex-direction: column;
            color: #32325d;
          }

          a {
            color: #d40052;
            font-weight: 600;
            text-decoration: underline;
          }

          .intro {
            font-size: 2rem;
            line-height: 2rem;
            letter-spacing: 0.03em;
            margin: 1rem 0 2rem;
          }

          .intro > div:first-child {
            margin-bottom: 2rem;
          }

          .intro > div:last-child {
            font-size: 1.6rem;
            line-height: 2rem
          }

          .button-row {
            display: flex;
            margin: 1rem auto;
            align-items: center;
            justify-content: space-between;
            width: 100%;
          }

          @media(max-width: 767px) {
            .button-row {
              flex-direction: column;
            }
          }

          .button-row a,
          .button-row button {
            text-align: center;
            width: 100%;
            margin-right: 1rem;
          }

          @media(max-width: 767px) {
            .button-row a,
            .button-row button {
              margin-right: 0;
              margin-top: 1.5rem;
            }
          }

          .beauty-button {
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
          }

          .beauty-button:hover {
            background-color: #db594b;
            color: white;
          }

          .waver {
            font-size: 4rem;
          }

          .title {
            margin: 4rem -1rem 1rem;
            font-size: 2rem;
            line-height: 2rem;
            padding: 0 1rem;
            letter-spacing: 0.03em;
            font-weight: bold;
          }
        `}</style>
      </div>
    )
  }
}
