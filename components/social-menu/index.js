import React, { PureComponent } from 'react'
import { Motion, spring, presets } from 'react-motion'

export default ({ open, toggle }) => (
  <div>
    <Motion style={{expandMenu: spring(open ? 1 : 0.1, presets.wobbly), opacity: spring(open ? 1 : -1)}}>
      {({ expandMenu, opacity }) => {
        return (
          <div style={{transform: `scale(${expandMenu})`, opacity}} className='menu'>
            <div style={{height: '100%'}}>
              <button onClick={toggle} className='closeButton'>×</button>
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
                  <a href='' target='_blank'>
                    <i className='icon ion-social-snapchat-outline'></i> Snapchat
                  </a>
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
            </div>
          </div>
        )
      }}
    </Motion>

    <style jsx>{`
      .menu {
        background: white;
        position: absolute;
        width: 100%;
        border-radius: 0.4rem;
        z-index: 10;
        margin-top: 6rem;
        padding: 2rem 4rem;
        color: black;
      }

      .icon {
        font-size: 2rem;
        margin-right: 2rem;
      }

      .closeButton {
        border: 0;
        background: white;
        position: absolute;
        right: 2rem;
        top: 2rem;
        cursor: pointer;
        font-size: 2rem;
        color: #78909C;
      }

      ul {
        padding-left: 0;
        list-style: none;
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

      li:first-child {
      }

      li:hover {
        transform: translateX(1rem);
      }

    `}</style>
  </div>
)
