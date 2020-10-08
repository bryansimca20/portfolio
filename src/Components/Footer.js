import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

const Footer = (props) => {
  return (
      <nav className="navbar align-self-end mb-1" id="footer">
        <div className="container-lg">
          <ul className="nav nav-fill ">
            <li className="nav-item">
              <a className="nav-link" href="https://www.linkedin.com/in/bryan-simca/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://github.com/bryansimca20">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.facebook.com/bryan.simca.7/">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
          </ul>
          <text className="ml-auto" style={{color:"#ffffff"}}>Copyright Bryan Simca</text>
        </div>
      </nav>
  )
}

export default Footer