import React from 'react'
import Link from 'next/link'
import Overdrive from 'react-overdrive'

export default ({ id }) => (
  <Overdrive id={`project-${id}`} animationDelay={1}>
    <div className='project'>
      <div className='image'>
        {id}
      </div>

      <div className='sidebar'>
        dope project {id}
      </div>

      <style jsx>{`
        .project {
          width: 80rem;
          overflow: hidden;
          height: 50rem;
          display: inline-block;
        }

        .image {
          float: left;
          width: 60rem;
          height: 60rem;
          background: #333;
          color: #fff;
          text-align: center;
          vertical-align: middle;
          line-height: 50rem;
          font-size: 4rem;
        }

        .sidebar {
          float: right;
          background: #fff;
          width: 20rem;
          height: 50rem;
          text-align: left;
          box-sizing: border-box;
          padding: 2rem;
          font-size: 1.2rem;
        }

        .sidebarList {
          list-style-type: none;
          margin: 0;
          padding: 0;
        }
      `}</style>
    </div>
  </Overdrive>
)
