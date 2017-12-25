import React, { PureComponent, Fragment } from 'react'
import GitHub from 'github-api'
import sortOn from 'sort-on'

import { Title, Head, Article, Screen, BackButton, Emoji } from '../components'

const USER_NAME = 'hanford'
const gh = new GitHub({ token: process.env.GITHUB_TOKEN })
const me = gh.getUser(USER_NAME)

export default class Projects extends PureComponent {

  static async getInitialProps () {
    const { data } = await me.listRepos()

    let myRepos = data.filter(({ owner, fork, stargazers_count: stars }) =>
      owner.login === USER_NAME && !fork && stars > 0
    )

    const repos = sortOn(myRepos, '-stargazers_count')

    return {
      repos
    }
  }

  render () {
    const { repos } = this.props

    return (
      <div className='container'>
        <Head title='Projects | Jack Hanford' />

        <Screen>
          <BackButton />

          <Title>Projects</Title>

          <p className='abt-me'>Lately I've been obssessed with open source software which I keep on <a href='https://github.com/hanford' target='_blank'>GitHub</a>. I've been writing JavaScript profressionally for around 4 years, and have become an expert with some of the latest and greatest frontend frameworks including <a href='https://www.npmjs.com/package/virtual-dom' target='_blank'>virtual-dom</a>, <a href='https://angular.io' target='_blank'>AngularJS</a> and most recently <a href='https://facebook.github.io/react' target='_blank'>ReactJS</a>.</p>

          <Fragment>
            {
              repos.map(({ name, id, description, stargazers_count: stars, language, html_url: html }) => (
                <Article
                  key={id}
                  path={html}
                  name={name}
                  about={description}
                  stars={stars}
                  language={language}
                />
              ))
            }
          </Fragment>
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
        `}</style>
      </div>
    )
  }
}
