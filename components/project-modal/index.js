import React, { PureComponent } from 'react'
import { Motion, spring, presets } from 'react-motion'
import Link from 'next/link'

import Head from '../../components/head'

export default ({ toggle, repo }) => {
  console.log(repo)
  return (
  <div className='body'>
    <section className='container'>

      <div className='card'>
        <button className='closeButton' onClick={toggle}>×</button>
        <div className='menu'>
          <div className='title'>{repo.name}</div>
          <div>{repo.language || 'Other'}</div>
          <div><i className='ion-android-star'></i> {repo.stargazers_count}</div>
          <div>{repo.description}</div>
        </div>
      </div>

    </section>

    <style jsx>{`
      .body {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .container {
        max-width: 100%;
        position: relative;
      }

      @media(max-width: 768px) {
        .container {
          width: 100%;
          height: 100%;
        }
      }

      .card {
        box-shadow: 0 18px 35px rgba(50,50,93,.1), 0 8px 15px rgba(0,0,0,.07);
        background-color: #f6f9fc;
        color: #32325d;
        border-radius: 0.4rem;
        padding: 2rem 4rem;
        margin-top: 0rem;
        position: relative;
        height: 100%;
      }

      .title {
        font-size: 1.8rem;
        line-height: 3rem;
        letter-spacing: -0.3px;
        font-weight: 600;
        color: #1461f4;
      }

      @media(max-width: 768px) {
        .card {
          height: 100%;
          margin-top: 8rem;
          padding: 2rem;
        }
      }

      .menu {
        width: 100%;
        border-radius: 0.4rem;
        z-index: 10;
        padding: 2rem 4rem;
        max-width: 60rem;
      }

      .icon {
        font-size: 2rem;
        margin-right: 2rem;
      }

      .closeButton {
        border: 0;
        background: transparent;
        position: absolute;
        right: 1rem;
        top: 1rem;
        cursor: pointer;
        font-size: 2rem;
        color: #78909C;
        z-index: 5;
        padding: 1rem;
      }

      ul {
        min-width: 32rem;
        padding-left: 0;
        list-style: none;
        animation: fadeIn 0.3s linear;
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      li {
        padding: 1rem;
        cursor: pointer;
        transition: all 0.3s;
      }

      a {
        display: flex;
        align-items: center;
        color: black;
        text-decoration: none;
      }

      li:hover {
        transform: translateX(4rem) scale(1.15);
      }
    `}</style>
  </div>
)
}
