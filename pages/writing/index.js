import React, { PureComponent } from 'react'
import Link from 'next/link'
import { get } from 'axios'

import Head from '../../components/head'
import TiltedBackground from '../../components/tilted-background'

export default class Writing extends PureComponent {
  static async getInitialProps () {
    const res = await get('https://medium-proxy-oycoiqhsbf.now.sh')
    const data = await res.data
    const { Post: posts } = await data.payload.references

    return {
      posts
    }
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
              <div className='page-title'>Writing</div>
              {
                Object.keys(posts).length && Object.keys(posts).map((p, index) => {
                  const post = posts[p]
                  const { subtitle, readingTime } = post.virtuals
                  const timeToRead = Math.round(readingTime)

                  return (
                    <Link
                      href={`https://medium.com/@jackhanford/${post.uniqueSlug}`}
                      key={index}
                    >
                      <div className='article'>
                        <a className='title' target='_blank'>{post.title}</a>
                        <div className='createdAt'>
                          {`${timeToRead} minute read`} - {subtitle}
                        </div>
                      </div>
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
            min-height: 100%;
            justify-content: center;
            overflow: hidden;
          }

          .page-title {
            font-size: 2rem;
            padding: 1rem;
            font-weight: 700;
          }

          .content {
            box-shadow: 0 18px 35px rgba(50,50,93,.1);
            color: #32325d;
            background: white;
            padding: 2rem;
            position: relative;

            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 100%;
            overflow-x: hidden;
            margin: 6rem auto;
            transform: translateZ(0);
          }

          .article-list {
            display: flex;
            flex-direction: column;
            max-width: 70rem;
            margin-left: auto;
            margin-right: auto;
          }

          .article {
            padding: 1rem;
            border-radius: 0.4rem;
          }

          .article:hover {
            cursor: pointer;
            background-color: rgba(0,0,0,0.05);
          }

          .article > .title {
            font-size: 2rem;
            font-weight: 700;
          }

          .article > .createdAt {
            width: 100%;
          }

          a,
          a:visited,
          a:active {
            color: #d40052;
            text-decoration: none;
            transition: all 0.2s linear;
          }

          a:hover {
            transform: scale(1.05);
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
