import React from 'react'
import "../src/style/homePage.css"
import Project from './components/project'
const Home = () => {
  return (
    <div className='homePage'>
      <h1>My Projects</h1>
      <div className="projects">

        <Project
          projectName="Salam"
          projectDesc="12"
          projectDate="12.12.12"
        />

      </div>
    </div>
  )
}

export default Home