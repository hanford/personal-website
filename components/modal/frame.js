import React from 'react'
import Link from 'next/link'
import Overdrive from 'react-overdrive'

export default ({ id }) => (
  <Overdrive id={`project-${id}`} animationDelay={1}>
    <div className='projectContainer'>
      <div className='project'>
        <div className='image'>
          {id}
        </div>

        <div className='sidebar'>
          dope project {id}
        </div>
      </div>

      <style jsx>{`
        .projectContainer {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .project {
          max-width: 60rem;
          overflow: hidden;
          display: flex;
          align-items: center;
          flex-direction: column;
        }

        .image {
          width: 40rem;
          height: 20rem;
          background: #333;
          color: #fff;
          text-align: center;
          font-size: 4rem;

          align-items: center;
          justify-content: center;
          display: flex;
        }

        .sidebar {
          background: #fff;
          width: 100%;
          height: 40rem;
          text-align: left;
          box-sizing: border-box;
          padding: 2rem;
          font-size: 1.2rem;
        }
      `}</style>
    </div>
  </Overdrive>
)
