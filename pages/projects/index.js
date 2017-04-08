import React, { Component } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import GitHub from 'github-api'
import sortOn from 'sort-on'

import Modal from '../../components/modal'
import Head from '../../components/head'
import config from '../../config.json'

const USER_NAME = 'hanford'

const gh = new GitHub({ token: config.token })

const me = gh.getUser(USER_NAME)

export default class Projects extends Component {
  static async getInitialProps () {
    const { data } = await me.listRepos()

    let myRepos = data.filter(({ owner, fork }) => owner.login === USER_NAME && !fork)
    let repos = sortOn(myRepos, '-stargazers_count')

    return {
      repos
    }
  }

  showRepo (e, id) {
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
    const { url, repos } = this.props
    console.log('repos', repos)

    return (
      <div style={{height: '100%', width: '100%', overflow: 'scroll'}}>
        <Head title='Jack Hanford | Projects' />

        <div className='container'>

          <div className='card'>
            <Link href='/'><a>Back</a></Link>
            <div>Projects</div>
            <div>I started writing JavaScript professionally 5 years ago.</div>


            {
              url.query.projectId &&
                <Modal
                  id={url.query.projectId}
                  onDismiss={() => this.dismissModal()}
                />
            }


            <div className='list'>
              {
                repos.map(({ name, id, description, stargazers_count: stars, language }) => (
                  <div className='project' onClick={(e) => this.showRepo(e, id)} key={id}>
                    <div className='content'>
                      <div className='about'>
                        <div className='title'>{name}</div>
                        <div>{description}</div>
                      </div>

                      <div className='breakdown'>
                        <div>{language || 'Other'}</div>
                        <div className='divider'></div>
                        <div><i className='ion-android-star'></i> {stars}</div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>

        </div>

        <style jsx>{`
          .container {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            max-width: 100%;
            width: 110rem;
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
            margin-top: 2rem;
          }

          .project {
            color: #333;
            cursor: pointer;
            background: white;
            width: 31.6rem;
            max-width: 95%;
            margin: 1.6rem auto;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 0.6rem;
            border: 1px solid #e7eef6;
            transition: all 0.2s ease-out;
          }

          .project .content {
            padding: 2rem;
            display: flex;
            flex-direction: column;
            height: 100%;
          }

          .divider {
            display: inline-block;
            height: 3rem;
            margin: 0 1.8rem 0;
            content: '';
            border-left: 1px solid #e7eef6;
          }

          .breakdown {
            display: flex;
            width: 100%;
            flex-direction: row;
            justify-content: center;
            align-items: center;
          }

          .project .content .about {
            display: flex;
            flex: 1;
            flex-direction: column;
            padding: 0 0 2rem 0;
          }

          .project .content .title {
            font-size: 1.8rem;
            line-height: 3rem;
            letter-spacing: -0.3px;
            font-weight: 600;
            color: #1461f4;
          }

          .project:hover {
            transform: scale(1.1);
          }
        `}</style>
      </div>
    )
  }
}
