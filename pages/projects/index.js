import React, { Component } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import Overdrive from 'react-overdrive'

import Modal from '../../components/modal'
import Head from '../../components/head'
// import projects from './projects'

export default class Projects extends Component {
  static getInitialProps () {
    return {
      projects: new Array(6)
        .fill(1)
        .map((v, k) => k + 1)
    }
  }

  showPhoto (e, id) {
    e.preventDefault()
    Router.push({
      pathname: '/projects',
      query: {
        projectId: id
      }
    })
  }

  onKeyDown (e) {
    if (!this.props.url.query.projectId) return
    if (e.keyCode === 27) {
      this.props.url.back()
    }
  }

  dismissModal () {
    Router.push('/projects')
  }

  render () {
    const { url, projects } = this.props

    return (
      <div style={{height: '100%', width: '100%'}}>
        <Head title='Jack Hanford | Projects' />

        {
          url.query.projectId &&
            <Modal
              id={url.query.projectId}
              onDismiss={() => this.dismissModal()}
            />
        }


        <div className='container'>
          <Overdrive id='card' animationDelay={1}>
            <div className='card'>
              <Link href='/'><a>Back</a></Link>
              <div>Projects</div>
              <div>I started writing JavaScript professionally 5 years ago.</div>

              <div className='list'>
                {
                  projects.map((id) => (
                    <Overdrive id={`project-${id}`} key={id} animationDelay={1}>
                      <div
                        className='project'
                        onClick={(e) => this.showPhoto(e, id)}
                      >
                        {id}
                      </div>
                    </Overdrive>
                  ))
                }
              </div>
            </div>
          </Overdrive>
        </div>

        <style jsx>{`
          .container {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            max-width: 80rem;
            margin: 3rem auto;
          }

          .list {
            display: flex;
            justify-content: center;
            text-align: center;
            flex-wrap: wrap;
          }

          .card {
            box-shadow: 0 18px 35px rgba(50,50,93,.1), 0 8px 15px rgba(0,0,0,.07);
            background-color: #f6f9fc;
            color: #32325d;
            border-radius: 0.4rem;
            padding: 2rem 4rem;
            position: relative;
            margin-top: 6rem;
          }

          .project {
            color: #333;
            cursor: pointer;
            background: #eee;
            width: 20rem;
            height: 20rem;
            line-height: 20rem;
            margin: 10px;
            border: 2px solid transparent;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .project:hover {
            borderColor: blue;
          }
        `}</style>
      </div>
    )
  }
}

