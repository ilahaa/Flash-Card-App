import React from 'react'
import "../style/project.css"
const project = (props) => {
  return (
    <div className='project-container m-3'>
      <h4>{props.projectName}</h4>
      <span><strong>Date created:</strong> {props.projectDate}</span>
      <p><strong>Description:</strong> {props.projectDesc}</p>
      <div className="view">
      <a className='viewProjectBtn' href={props.projectLink} target="_blank">
        View Project
      </a>
      </div>
  </div>
  )
}

export default project