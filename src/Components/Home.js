import React from "react";

import portfolioPhoto from '../media/LinkedIn_Photo.JPG'

const Home = (props) => {
  return (
    <div className="row" id="home">
      <div className="col-lg align-self-center">
        <h1 className="display-4">Hi, I'm Bryan</h1>
        <p className="lead">
          I'm a <strong>Mechanical Engineering</strong> Student at <strong>University of California, Los Angeles</strong> who likes Autonomous systems and Web Development
        </p>
      </div>
      <div className="col-lg col-sm-8 justify-self-center">
        <img src={portfolioPhoto}
             className="img-fluid"
           alt="Profile"
           id="profile-image" />
      </div>
    </div>
  )
}

export default Home

