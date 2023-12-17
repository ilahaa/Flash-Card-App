import React from 'react'
import "../style/project.css"
const project = (props) => {
  return (
    <div className='project-container'>
        <h4>{props.projectName}</h4>
        <p>{props.projectDesc}</p>
        <span>{props.projectDate}</span>
    </div>
  )
}

export default project