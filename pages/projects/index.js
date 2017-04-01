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
      projects: new Array(7)
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
        <Link href='/'><a>Back</a></Link>

        {
          url.query.projectId &&
            <Modal
              id={url.query.projectId}
              onDismiss={() => this.dismissModal()}
            />
        }


        <div className='container'>
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
            padding: 0 50px;
            display: flex;
            text-align: center;
            flex-wrap: wrap;
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

