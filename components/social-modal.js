import React, { PureComponent } from 'react'
import Link from 'next/link'

export const SocialModal = ({ toggle }) => (
  <div className='card'>
    <button className='closeButton' onClick={toggle}>×</button>

    <ul>
      <li>
        <a href='https://github.com/hanford' target='_blank'>
          <i className='icon ion-social-github'></i> Github
        </a>
      </li>
      <li>
        <a href='https://twitter.com/jackhanford' target='_blank'>
          <i className='icon ion-social-twitter-outline'></i> Twitter
        </a>
      </li>
      <li>
        <a href='https://www.instagram.com/jackhanford/' target='_blank'>
          <i className='icon ion-social-instagram-outline'></i> Instagram
        </a>
      </li>
      <li>
        <Link prefetch href='/snapchat'>
          <a><i className='icon ion-social-snapchat-outline'></i> Snapchat</a>
        </Link>
      </li>
      <li>
        <a href='https://facebook.com/jackhanford' target='_blank'>
          <i className='icon ion-social-facebook-outline'></i> Facebook
        </a>
      </li>
      <li>
        <a href='mailto:jackhanford@gmail.com' target='_blank'>
          <i className='icon ion-ios-email-outline'></i> Email
        </a>
      </li>
      <li>
        <a href='https://www.linkedin.com/in/jack-hanford-98352761/' target='_blank'>
          <i className='icon ion-social-linkedin-outline'></i> Linkedin
        </a>
      </li>
    </ul>

    <style jsx>{`
      .card {
        box-shadow: 0 18px 35px rgba(50,50,93,.1), 0 8px 15px rgba(0,0,0,.07);
        background-color: white;
        border-radius: 0.4rem;
        padding: 2rem 4rem;
        position: relative;
      }

      @media(max-width: 767px) {
        .card {
          padding: 2rem;
          margin: 2rem;
        }
      }

      .menu {
        background: white;
        position: absolute;
        width: 100%;
        border-radius: 0.4rem;
        z-index: 10;
        margin-top: 6rem;
        padding: 2rem 4rem;
        color: black;
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

export default SocialModal
