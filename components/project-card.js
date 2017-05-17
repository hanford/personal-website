import React from 'react'

export const ProjectCard = ({ name, id, description, stars, language }) => (
  <div className='project'>
    <div className='content'>
      <div className='about'>
        <div className='title'>{name}</div>
        <div>{description}</div>
      </div>

      <div className='breakdown'>
        <div>{language || 'Other'}</div>
        <div className='divider'></div>
        <div><i className='ion-android-star'></i> {stars}</div>
      </div>
    </div>

    <style jsx>{`
      .project {
        color: #333;
        cursor: pointer;
        background: white;
        width: 31.6rem;
        max-width: 95%;
        margin: 1.6rem auto;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0.6rem;
        border: 1px solid #e7eef6;
        transition: all 0.2s ease-out;
        box-shadow: rgba(0, 0, 0, 0.0980392) 0px 5px 15px -5px;
      }

      .project .content {
        padding: 2rem;
        display: flex;
        flex-direction: column;
        height: 100%;
      }

      .divider {
        display: inline-block;
        height: 3rem;
        margin: 0 1.8rem 0;
        content: '';
        border-left: 1px solid #e7eef6;
      }

      .breakdown {
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: center;
        align-items: center;
      }

      .project .content .about {
        display: flex;
        flex: 1;
        flex-direction: column;
        padding: 0 0 2rem 0;
      }

      .project .content .title {
        font-size: 1.8rem;
        line-height: 3rem;
        letter-spacing: -0.3px;
        font-weight: 600;
        color: #d40052;
      }

      .project:hover {
        transform: scale(1.05);
      }
    `}</style>
  </div>
)

export default ProjectCard
