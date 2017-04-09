import React, { PureComponent } from 'react'
import Link from 'next/link'
import { Motion, spring } from 'react-motion'

import Head from '../components/head'
import Drawer from '../components/drawer'
import SocialModal from '../components/social-modal'

const name = (
  <span style={{fontWeight: 600}}>Jack Hanford</span>
)

export default class Landing extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      expanded: false
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle () {
    this.setState((state) => {
      return {
        expanded: !state.expanded
      }
    })
  }

  render () {
    const { expanded } = this.state

    return (
      <div style={{height: '100%'}}>
        <Head />

        <div className='body'>
          <div>
            <div className='tiltedBack' />
          </div>

          <section className='container'>
            <div className='card'>
              <div className='content'>
                <div className='waver'>👋</div>
                <div className='intro'>
                  <div>Hi I'm {name}</div>

                  <br />

                  <div>I'm a senior software engineer at <a href='https://eaze.com' target='_blank'>Eaze</a>.</div>
                </div>

                <div className='button-row'>
                  <Link prefetch href='/projects'>
                    <a className='beauty-button'>Open Source</a>
                  </Link>
                  <button className='beauty-button' onClick={this.toggle}>Contact me</button>
                </div>

              </div>
            </div>
          </section>
        </div>

        <Drawer
          open={expanded}
          onRequestClose={this.toggle}
          contentLabel='social modal'
          negativeScroll={-1}
        >
          <SocialModal toggle={this.toggle} />
        </Drawer>

        <style jsx>{`
          .body {
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: center;
            position: relative;
            overflow: hidden;
            justify-content: center;
          }

          .tiltedBack {
            width: 150%;
            height: 95%;
            background-color: white;
            transform: rotateZ(10deg);
            position: absolute;
            top: -20rem;
            left: -118px;
            box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.15);
          }

          a {
            color: #1461f4;
            font-weight: 600;
            text-decoration: underline;
          }

          .container {
            width: 100%;
            color: #32325d;
          }

          .intro {
            line-height: 1.8rem;
            letter-spacing: 0.03em;
            opacity: 0.9;
            margin: 1rem 0 2rem;
          }

          .card {
            width: 40rem;
            max-width: 100%;
            color: #32325d;
            padding: 2rem 4rem;
            padding-top: 16rem;
            position: relative;
            margin: 0 auto
          }

          .content {
            animation: fadeIn 0.3s linear;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          .button-row {
            display: flex;
            margin: 1rem auto;

            align-items: center;
            justify-content: space-between;
            width: 100%;
          }

          .button-row a,
          .button-row button {
            text-align: center;
            font-weight: 600 !important;
            width: 100%;
            margin-right: 1rem;
          }

          .beauty-button {
            display: block;
            line-height: 4rem;
            padding: 0 1.4rem;
            box-shadow: 0 0.4rem 0.6rem rgba(50,50,93,.11), 0 0.1rem 0.3rem rgba(0,0,0,.08);
            background: #fff;
            border-radius: 0.4rem;
            font-size: 1.2rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: .025em;
            color: #32325d;
            text-decoration: none;
            border: 0px;
            cursor: pointer;
            outline: none;
            transition: all 0.25s ease-out;
          }

          .beauty-button:hover {
            transform: scale(1.05);
            color: #1461f4;
          }

          .waver {
            font-size: 4rem;
          }

          @keyframes slideIn {
            from {
              transform: scale(0.95);
              opacity: 0.25;
            }
            to {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}</style>
      </div>
    )
  }
}
