import React, { PureComponent, Fragment } from 'react'
import GitHub from 'github-api'
import sortOn from 'sort-on'
import styled from 'react-emotion'
import wrap from 'await-wrap'
import withOffline from 'next-offline/hoc'

import { Title, Head, Article, Screen, BackButton, Emoji } from '../components'

const USER_NAME = 'hanford'
const gh = new GitHub({ token: process.env.GITHUB_TOKEN })
const me = gh.getUser(USER_NAME)

class Projects extends PureComponent {
  static async getInitialProps () {
    const { err, data: { data } } = await wrap(me.listRepos())

    if (err || !data) return { repos: [] }

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
      <Container>
        <Head title='Projects | Jack Hanford' />

        <Screen>
          <BackButton />

          <Title>Projects</Title>

          <p>Lately I've been obssessed with open source software which I keep on <Anchor href='https://github.com/hanford' target='_blank'>GitHub</Anchor>. I've been writing JavaScript profressionally for around 4 years, and have become an expert with some of the latest and greatest frontend frameworks including <Anchor href='https://www.npmjs.com/package/virtual-dom' target='_blank'>virtual-dom</Anchor>, <Anchor href='https://angular.io' target='_blank'>AngularJS</Anchor>, <Anchor href='https://facebook.github.io/react' target='_blank'>ReactJS</Anchor> and most recently <Anchor href='https://github.com/zeit/next.js' target='_blank'>Next.js</Anchor>.</p>

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
        </Screen>
      </Container>
    )
  }
}

export default withOffline(Projects)

const Container = styled.div`
  display: flex;
  max-width: 100%;
  justify-content: center;
  text-align: left;
  font-size: 1.6rem;
`

const Anchor = styled.a`
  color: #d40052;
  font-weight: 600;
  text-decoration: underline;
`
