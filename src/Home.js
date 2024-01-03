import React from 'react'
import "../src/style/homePage.css"
import Project from './components/project'
const Home = () => {
  return (
    <div className='homePage' id='home-section'>
      <div className="row container m-5">

        <div className="col-lg-7 home-texts">
          <h1>Welcome.</h1>
          <p><strong>Hello!</strong> <br />
             I'm Ilaha Hasanli, a fourth-year student majoring in Computer Science at ADA University.
            I'm passionate about front-end development and love creating web experiences.
            On this website, you'll discover a collection of projects that I've crafted.
            Additionally, I've curated my top reads in a fun flashcard format.</p>
        </div>

        <div className="col-lg-5 projects">
          <div className='scrollable-box'>
            <Project
              projectName="Flashcards"
              projectDesc="This project is built for the second assignment of Web&Mobile course."
              projectDate="04.01.24"
              projectLink="https://github.com/ilahaa/Web-Mobile1-Assignment3"
            />

            <Project
              projectName="Assignment 2"
              projectDesc="This project is built for the second assignment of Web&Mobile course."
              projectDate="05.12.23"
              projectLink="https://ilahaa.github.io/Assignment2-web1course/"
            />

            <Project
              projectName="Assignment 1"
              projectDesc="This project is built for the first assignment of Web&Mobile course."
              projectDate="15.11.23"
              projectLink="https://ilahaa.github.io/Assignment1-web1course/"
            />

            <Project
              projectName="Debebe"
              projectDate="11.12.22"
              projectLink="https://github.com/ilahaa/finalProject"
            />

            <Project
              projectName="CakeBakery"
              projectDate="01.12.22"
              projectLink="https://github.com/ilahaa/cake-bakery"
            />

            <Project
              projectName="GithubFinder"
              projectDate="30.06.22"
              projectLink="https://github.com/ilahaa/githubfinder"
            />

            <Project
              projectName="Pizzon"
              projectDate="30.05.22"
              projectLink="https://ilahaa.github.io/Pizzon/"
            />

            <Project
              projectName="Toptul"
              projectDate="28.04.22"
              projectLink="ilahaa.github.io/toptul/"
            />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Home