import React from 'react'
import {BrowserRouter as Router} from "react-router-dom";
import {NavLink} from 'react-router-dom'

const Navbar = (props) =>  {

  return (
      <nav id="navbar"
        className="navbar fixed-top"
        style={
          {
            background : "rgba(0,0,0,0.8)"
          }
        }
      >
        <div className="container-lg">
          <NavLink to="/" className="navbar-brand" href="#home"
          style={{color:"#ffffff"}}>Bryan</NavLink>
          <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
              <NavLink exact to="/" activeClassName="active" className="nav-link" href="#home">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Experience" activeClassName="active" className="nav-link" href="#about">Experience</NavLink>
            </li>
          </ul>
        </div>
      </nav>
  )
}

export default Navbar
