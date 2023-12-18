import React from 'react'
import "../src/style/homePage.css"
import Project from './components/project'
const Home = () => {
  return (
    <div className='homePage'>
      <h1>My Projects</h1>
      <div className="projects m-5">

      <Project
          projectName="Web&Mobile-Assignment 3"
          projectDesc="This project is built for the second assignment of Web&Mobile course."
          projectDate="04.01.24"
          projectLink="https://github.com/ilahaa/Web-Mobile1-Assignment3"
        />
  
        <Project
          projectName="Web&Mobile-Assignment 2"
          projectDesc="This project is built for the second assignment of Web&Mobile course."
          projectDate="05.12.23"
          projectLink="https://ilahaa.github.io/Assignment2-web1course/"
        />

        <Project
          projectName="Web&Mobile-Assignment 1"
          projectDesc="This project is built for the first assignment of Web&Mobile course."
          projectDate="15.11.23"
          projectLink="https://ilahaa.github.io/Assignment1-web1course/"
        />

        <Project
          projectName="Website-Debebe"
          projectDate="11.12.22"
          projectLink="https://github.com/ilahaa/finalProject"
        />

        <Project
          projectName="Website-CakeBakery"
          projectDate="01.12.22"
          projectLink="https://github.com/ilahaa/cake-bakery"
        />

        <Project
          projectName="Website-GithubFinder"
          projectDate="30.06.22"
          projectLink="https://github.com/ilahaa/githubfinder"
        />

        <Project
          projectName="Website-Pizzon"
          projectDate="30.05.22"
          projectLink="https://ilahaa.github.io/Pizzon/"
        />

        <Project
          projectName="Website-Toptul"
          projectDate="28.04.22"
          projectLink="ilahaa.github.io/toptul/"
        />

      </div>
    </div>
  )
}

export default Home