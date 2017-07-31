import React, { PureComponent } from 'react'
import Router from 'next/router'
import GitHub from 'github-api'
import sortOn from 'sort-on'

import { Title, Head, Article, Screen, BackButton } from '../components'

const USER_NAME = 'hanford'
const gh = new GitHub({ token: process.env.GITHUB_TOKEN })
const me = gh.getUser(USER_NAME)

export default class Projects extends PureComponent {

  static async getInitialProps () {
    const { data } = await me.listRepos()

    let myRepos = data.filter(({ owner, fork, stargazers_count }) =>
      owner.login === USER_NAME && !fork && stargazers_count > 0
    )

    let repos = sortOn(myRepos, '-stargazers_count')

    return {
      repos
    }
  }

  render () {
    const { repos } = this.props

    return (
      <div className='container'>
        <Head title='Jack Hanford | Projects' />

        <Screen>
          <BackButton />

          <div style={{fontSize: '4rem'}}>💻</div>

          <Title content='Projects' />

          <p className='abt-me'>Lately I've been obssessed with open source software which I keep on <a href='https://github.com/hanford' target='_blank'>GitHub</a>. I've been writing JavaScript profressionally for around 4 years, and have become an expert with some of the latest and greatest frontend frameworks including <a href='https://www.npmjs.com/package/virtual-dom' target='_blank'>virtual-dom</a>, <a href='https://angular.io' target='_blank'>AngularJS</a> and most recently <a href='https://facebook.github.io/react' target='_blank'>ReactJS</a>.</p>
          <div className='list'>
            {
              repos.map(({ name, id, description, stargazers_count, language, html_url }) => (
                <Article
                  key={id}
                  path={html_url}
                  name={name}
                  about={description}
                  stars={stargazers_count}
                  language={language}
                />
              ))
            }
          </div>
        </Screen>

        <style jsx>{`
          .container {
            display: flex;
            max-width: 100%;
            justify-content: center;
            text-align: left;
          }

          a {
            color: #d40052;
            font-weight: 600;
            text-decoration: underline;
          }

          .card-link {
            display: flex;
          }
        `}</style>
      </div>
    )
  }
}
