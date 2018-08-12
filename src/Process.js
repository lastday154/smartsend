import React, { Component } from "react";
import "./Process.css";

class Process extends Component {
  render() {
    return (
      <section id="explore-head-section">
        <div className="container">
          <div className="row">
            <div className="col">
              <div>
                <div className="bxMrsX">How does it work?</div>
                <div className="rCnks">
                  <div className="cjsnzg">
                    <img
                      type="image/svg+xml"
                      src="images/setOrder-1a83310fc41dc71639a152ff773e3f8b.svg"
                    />
                    <article className="cEhSrV">
                      Set your Transfer &amp; Recipient details in
                      <span className="iUNQDY"> AloSend</span>
                    </article>
                  </div>
                  <div className="cjsnzg">
                    <img
                      type="image/svg+xml"
                      src="images/banking-088fbe643803d28469d3446445f45f65.svg"
                    />
                    <article className="cEhSrV">
                      Fund your transfer by{" "}
                      <span className="iUNQDY"> bank transfer </span>
                      or
                      <span className="iUNQDY"> by cash </span>
                      at our office
                    </article>
                  </div>
                  <div className="cjsnzg">
                    <img
                      type="image/svg+xml"
                      src="images/money-3079740d2796713003bf3be7a946d016.svg"
                    />
                    <article className="cEhSrV">
                      Your money will arrive today!
                      <br />
                      <span className="gMrjIv">
                        (if your funds reach us before the{" "}
                        <a
                          href="https://www.dbs.com.sg/smartsend/faq.html#/detail?title=List of cut-off times by country"
                          className="dyoOHW"
                        >
                          cut-off time
                        </a>
                        )
                      </span>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Process;
