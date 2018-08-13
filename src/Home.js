import React, { Component } from "react";
import Process from "./Process";
import Why from "./Why";
import Country from "./Country";
import Footer from "./Footer";

class Home extends Component {
  render() {
    return (
      <div>
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
export default Home;
