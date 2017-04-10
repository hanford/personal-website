import React, { PureComponent } from 'react'
import Link from 'next/link'
import fetch from 'node-fetch'

import Head from '../../components/head'
import TiltedBackground from '../../components/tilted-background'

export default class Writing extends PureComponent {
  static async getInitialProps () {
    return fetch('https://medium-proxy-gxwtirwype.now.sh')
      .then(r => r.json())
    	.then(({ payload }) => {
        const { Post: posts } = payload.references
        return {
          posts
        }
      })
  }

  render () {
    const { posts } = this.props

    const containerStyle = {
      height: '100%',
      width: '100%',
      overflow: 'scroll',
      WebkitOverflowScrolling: 'touch'
    }

    return (
      <div style={containerStyle}>
        <Head title='Jack Hanford | Writing' />

        <div className='container'>
          <div className='content'>
            <div className='article-list'>
              <h2>Writing</h2>
              {
                Object.keys(posts).length && Object.keys(posts).map((p, index) => {
                  const post = posts[p]
                  console.log(post)

                  return (
                    <Link
                      href={`https://medium.com/@jackhanford/${post.uniqueSlug}`}
                      key={index}
                    >
                      <a className='article' target='_blank'>{post.title}</a>
                    </Link>
                  )
                })
              }
            </div>

            <Link href='/'><a style={{position: 'absolute', top: '1rem', right: '2rem', fontSize: '3rem'}}>×</a></Link>
          </div>
        </div>

        <style jsx>{`
          .container {
            display: flex;
            max-width: 100%;
            height: 100%;
            justify-content: center;
            overflow: hidden;
          }

          .content {
            box-shadow: 0 18px 35px rgba(50,50,93,.1);
            color: #32325d;
            background: white;
            padding: 2rem;
            width: 100%;
            position: relative;
            margin: 4rem auto;
          }

          .article-list {
            display: flex;
            flex-direction: column;
            max-width: 70rem;
            margin-left: auto;
            margin-right: auto;
          }

          .article {
            margin-bottom: 1rem;
            font-size: 2rem;
            font-weight: 700;
          }

          a,
          a:visited,
          a:active {
            color: #d40052;
            text-decoration: none;
            transition: all 0.2s linear;
          }

          a:hover {
            transform: translateX(0.5rem) scale(1.05);
          }

          .backButton {
            background-color: transparent;
            margin-top: 3rem;
            color: white;
            border: 0;
            font-size: 1.6rem;
            cursor: pointer;
            outline: none;
          }

          img {
            height: 20rem;
          }
        `}</style>
      </div>

    )
  }
}
