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
                <li><span>Github</span></li>
                <li><span>Twitter</span></li>
                <li><span>Instagram</span></li>
                <li><span>Snapchat</span></li>
                <li><span>Facebook</span></li>
                <li><span>Email</span></li>
                <li><span>Linkedin</span></li>
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

      li:first-child {
      }

      li:hover {
        transform: translateX(2rem);
      }

    `}</style>
  </div>
)
