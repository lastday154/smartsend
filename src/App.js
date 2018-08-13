import React, { Component } from "react";
import "./App.css";
import { Route, NavLink, HashRouter } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Faq from "./Faq";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <nav
            className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top"
            id="main-nav"
          >
            <div className="container">
              <a href="/" className="navbar-brand">
                <img src="images/favicon.ico" />
                ALOSEND
              </a>
              <button
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/#/about" className="nav-link">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/#/faq" className="nav-link">
                      Faq
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/faq" component={Faq} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
