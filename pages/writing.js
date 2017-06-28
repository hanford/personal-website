import React, { PureComponent } from 'react'
import Link from 'next/link'
import { get } from 'axios'

import { Head, Title, Screen, BackButton } from '../components'

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

    return (
      <div className='container'>
        <Head title='Jack Hanford | Writing' />

        <Screen>
          <BackButton />
          <div style={{fontSize: '4rem'}}>✍️</div>
          <Title content='Writing' />

          <div className='article-list'>
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
                    <a className='article' target='_blank'>
                      <div className='title'>{post.title}</div>
                      <div className='createdAt'>
                        {`${timeToRead} minute read`} - {subtitle}
                      </div>
                    </a>
                  </Link>
                )
              })
            }
          </div>
        </Screen>

        <style jsx>{`
          .container {
            display: flex;
            max-width: 100%;
            justify-content: center;
            text-align: left;
            -webkit-overflow-scrolling: touch;
            overflow: auto;
          }

          .hero {
            max-width: 100%;
            width: 100%;
            background-color: white;
            color: rgba(0, 0, 0, 0.8);
            padding: 6rem 2rem;
            min-height: 70rem;
            margin: 2rem auto 0;
            position: relative;
          }

          .article-list {
            display: flex;
            flex-direction: column;
            min-height: 40rem;
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
            color: black;
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
