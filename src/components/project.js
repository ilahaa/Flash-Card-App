import React from 'react'
import "../style/project.css"
const project = (props) => {
  return (
    <div className='project-container'>
      <h4>{props.projectName}</h4>
      <span>{props.projectDate}</span>
      <a href={props.projectLink} target="_blank">
        View Project
      </a>
  </div>
  )
}

export default project