import React, { PureComponent } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import GitHub from 'github-api'
import { partial } from 'ap'
import sortOn from 'sort-on'

import { Title, Head, Article } from '../components'

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
    const { url, repos } = this.props

    return (
      <div>
        <Head title='Jack Hanford | Projects' />

        <div className='container'>
          <div className='card-container'>
            <div className='card'>

              <Link href='/'>
                <a style={{position: 'absolute', top: '2rem', right: '2rem', fontSize: '3rem'}}>×</a>
              </Link>


              <div style={{fontSize: '4rem'}}>💻</div>

              <Title content='Projects' />

              <p className='abt-me'>Lately I've been obssessed with open source software, which I keep <a href='https://github.com/hanford' target='_blank'>on github</a>. I've been writing JavaScript profressionally for around 4 years, and have become an expert with some of the latest and greatest frontend frameworks including <a href='https://www.npmjs.com/package/virtual-dom' target='_blank'>virtual-dom</a>, <a href='https://angular.io' target='_blank'>AngularJS</a> and most recently <a href='https://facebook.github.io/react' target='_blank'>ReactJS</a>.</p>
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

            </div>
          </div>
        </div>

        <style jsx>{`
          .container {
            display: flex;
            max-width: 100%;
            justify-content: center;
            text-align: left;
          }

          .card-container {
            max-width: 100%;
            padding: 8rem 2rem;
            animation: fadeIn 0.4s linear;
          }

          @media(max-width: 767px) {
            .card-container {
              padding: 2rem;
            }
          }

          .card {
            max-width: 55rem;
            color: #32325d;
            padding: 4rem;
            position: relative;
            margin: 0 auto;
            background-color: white;
            border-radius: 0.4rem;
            box-shadow: 0 1rem 3.5rem rgba(0,0,0,0.2);
          }

          @media(max-width: 767px) {
            .card {
              padding: 2rem;
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10rem);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .card-link {
            display: flex;
          }

          a {
            color: #d40052;
            font-weight: 600;
            text-decoration: none;
          }
        `}</style>
      </div>
    )
  }
}
