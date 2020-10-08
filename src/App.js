/* React and Particles.js import */
import React, {Component} from 'react';
import { HashRouter, BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom'
import Particles from "react-tsparticles";
import particlesOptions from "./particles.json";

/* Bootstrap and CSS Imports */
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-reboot.css'
import './App.css';

/* Components Import */
import Navbar from "./Components/Navbar";
import Content from "./Components/Content"
import Footer from "./Components/Footer";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Particles options={particlesOptions}/>
        <Navbar />
        <Content />
        <Footer />
      </HashRouter>
    );
  }
}

export default App;
