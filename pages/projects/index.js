import React, { PureComponent } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import GitHub from 'github-api'
import { partial } from 'ap'
import sortOn from 'sort-on'

import Head from '../../components/head'
import Card from './card'

const USER_NAME = 'hanford'

const gh = new GitHub({ token: process.env.GITHUB_TOKEN })

const me = gh.getUser(USER_NAME)

export default class Projects extends PureComponent {
  static async getInitialProps () {
    const { data } = await me.listRepos()

    let myRepos = data.filter(({ owner, fork }) => owner.login === USER_NAME && !fork)
    let repos = sortOn(myRepos, '-stargazers_count')

    return {
      repos
    }
  }

  constructor (props) {
    super(props)

    this.state = {
      expanded: false
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle (id) {
    const { repos } = this.props

    const repo = repos.find(r => r.id === id) || null

    this.setState((state) => {
      return {
        expanded: !state.expanded,
        repo
      }
    })
  }

  render () {
    const { url, repos } = this.props
    const { expanded, repo } = this.state

    const containerStyle = {
      height: '100%',
      width: '100%',
      overflow: 'scroll',
      WebkitOverflowScrolling: 'touch'
    }

    return (
      <div style={containerStyle}>
        <Head title='Jack Hanford | Projects' />

        <div className='container'>
          <div className='card'>
            <div style={{maxWidth: '110rem', marginLeft: 'auto', marginRight: 'auto'}}>
              <Link href='/'>
                <a style={{position: 'absolute', top: '1rem', right: '2rem', fontSize: '3rem'}}>×</a>
              </Link>

              <div className='projects'>
                <div>Projects</div>

                <p className='abt-me'>Lately I've been obssessed with open source software, which I keep <a href='https://github.com/hanford' target='_blank'>on github</a>. I've been writing JavaScript profressionally for around 4 years, and have become an expert with some of the latest and greatest frontend frameworks including <a href='https://www.npmjs.com/package/virtual-dom' target='_blank'>virtual-dom</a>, <a href='https://angular.io' target='_blank'>AngularJS</a> and most recently <a href='https://facebook.github.io/react' target='_blank'>ReactJS</a>.</p>
              </div>

              <div className='list'>
                {
                  repos.map(({ name, id, description, stargazers_count, language, html_url }) => (
                    <a href={html_url} key={id} target='_blank' className='card-link'>
                      <Card
                        name={name}
                        id={id}
                        description={description}
                        stars={stargazers_count}
                        language={language}
                      />
                    </a>
                  ))
                }
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .container {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 100%;
            overflow-x: hidden;
            margin: 6rem auto;
            transform: translateZ(0);
          }

          .card-link {
            display: flex;
          }

          .projects {
            margin: 2rem;
          }

          a {
            color: #d40052;
            font-weight: 600;
            text-decoration: none;
          }

          .list {
            display: flex;
            justify-content: center;
            text-align: center;
            flex-wrap: wrap;
          }

          .card {
            box-shadow: 0 18px 35px rgba(50,50,93,.1);
            background-color: white;
            color: #32325d;
            padding: 2rem;
            width: 100%;
            position: relative;
          }
        `}</style>
      </div>
    )
  }
}
