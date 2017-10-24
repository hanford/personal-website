import React, { PureComponent } from 'react'
import Drawer from 'react-drag-drawer'

export const SocialModal = ({ toggle, open }) => (
  <Drawer
    open={open}
    onRequestClose={toggle}
  >
    <div className='card'>
      <button className='closeButton' onClick={toggle}>×</button>

      <ul>
        <Link
          link='https://github.com/hanford'
          text='Github'
          icon='ion-social-github'
        />

        <Link
          link='https://www.twitter.com/jackhanford'
          text='Twitter'
          icon='ion-social-twitter-outline'
        />

        <Link
          link='https://www.instagram.com/jackhanford'
          text='Instagram'
          icon='ion-social-instagram-outline'
        />

        <Link
          link='/snapchat'
          text='Snapchat'
          icon='ion-social-snapchat-outline'
        />

        <Link
          link='https://facebook.com/jackhanford'
          text='Facebook'
          icon='ion-social-facebook-outline'
        />

        <Link
          link='mailto:jackhanford@gmail.com'
          text='Email'
          icon='ion-ios-email-outline'
        />

        <Link
          link='https://www.linkedin.com/in/jack-hanford-98352761/'
          text='Linkedin'
          icon='ion-social-linkedin-outline'
        />
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
          }
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
        }
      `}</style>
    </div>
  </Drawer>
)

const Link = ({ icon, text, link }) => (
  <li>
    <a href={link} target='_blank'>
      <i className={`icon ${icon}`} /> {text}
    </a>

    <style jsx>{`
      li {
        padding: 1rem;
        cursor: pointer;
        transition: all 0.3s;
      }

      .icon {
        font-size: 2rem;
        margin-right: 2rem;
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
  </li>
)

export default SocialModal
