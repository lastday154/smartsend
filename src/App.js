import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Calculator from "./Calculator";
import Process from "./Process";
import Why from "./Why";
import Country from "./Country";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top"
          id="main-nav"
        >
          <div className="container">
            <a href="index.html" className="navbar-brand">
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
                  <a href="#home" className="nav-link">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#explore-head-section" className="nav-link">
                    Explore
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#about-head-section" className="nav-link">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* HOME SECTION */}
        <header id="home-section">
          <div className="dark-overlay">
            <div className="home-inner container">
              <div className="row">
                <div className="col-lg-12 d-lg-block">
                  <div className="cspCNR">
                    <div>
                      Send money overseas safely with ALOSEND, same day $0 fees.
                    </div>
                    <div>From any account with any bank.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <Process />
        <hr className="itjIoV" />
        <Why />
        <hr className="itjIoV" />
        <Country />
        <hr className="itjIoV" />
        <Footer />
      </div>
    );
  }
}

export default App;
