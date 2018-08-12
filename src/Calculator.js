import React, { Component } from "react";
import "./Calculator.css";

class Calculator extends Component {
  render() {
    return (
      <div className="NTB_components-calculator-_home_container">
        <div className="dpvokZ">
          <div className="NTB_components-calculator-_home_countrySelector">
            <div className="NTB_components-Dropdown-_index_dropdown">
              <input
                autoComplete="off"
                maxLength="35"
                name="country"
                className=""
                value=""
              />
              <div>
                <label for="country" style={{ "font-size": "1.2em" }}>
                  Transfer to
                </label>
                <div
                  className="NTB_components-Dropdown-_display_dropdown-display"
                  style={{
                    border: "0px",
                    margin: "0px -1em",
                    height: "3.8em",
                    background: "transparent"
                  }}
                >
                  <div className="NTB_components-Dropdown-_option_dropdown-option display NTB_components-Dropdown-_option_selected">
                    <div
                      className="NTB_components-Dropdown-_option-element_dropdown-option-element"
                      style={{ flex: "0 0 35px", "padding-right": "0.5em" }}
                    >
                      <img src="/images/AUD-193884f706e0d0ffdccc30a48f8db07f.png" />
                    </div>
                    <div
                      className="NTB_components-Dropdown-_option-element_dropdown-option-element"
                      style={{
                        flex: "1 1 auto",
                        "font-size": "1.2em",
                        "font-weight": "400"
                      }}
                    >
                      Australia
                    </div>
                  </div>
                  <div className="NTB_components-Dropdown-_display_arrow-down">
                    <svg viewBox="0 0 30 20">
                      <polyline
                        points="5,5 15,15 25,5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="RTdSn">
            <div className="ebqozO">
              <div className="jyEPCN">Transfer to</div>
              <div className="krDkSA">
                <img
                  src="images/AUD-193884f706e0d0ffdccc30a48f8db07f.png"
                  className="bNKFgN"
                />
                <div className="kUUEqR">Australia</div>
                <img
                  src="images/dropdown-4311c094188ea70b6cfc340ca8a18216.svg"
                  className="etBOOO"
                />
              </div>
            </div>
            <div className="TDcoy">
              <div className="cQpazM">
                <div>Select Country</div>
                <div>Close</div>
              </div>
              <div className="jIdDAP">
                <div className="kyYbuT">
                  <img src="images/AUD-193884f706e0d0ffdccc30a48f8db07f.png" />
                  <div>Australia</div>
                  <div>AUD</div>
                </div>
                <div className="hOlCQp">
                  <img src="images/GBP-be185799644b74f65cc0d13cecad86a9.png" />
                  <div>United Kingdom</div>
                  <div>GBP</div>
                </div>
                <div className="hOlCQp">
                  <img src="images/HKD-4595c2c78cb226cbd142c2f2ffe207ce.png" />
                  <div>Hong Kong</div>
                  <div>HKD</div>
                </div>
                <div className="hOlCQp">
                  <img src="images/INR-bd1f4a9778aab48ce10c21fec3a458a6.png" />
                  <div>India</div>
                  <div>INR</div>
                </div>
                <div className="hOlCQp">
                  <img src="images/IDR-3a6b4e59683c4f1f9ade10f306b8d28f.png" />
                  <div>Indonesia</div>
                  <div>IDR</div>
                </div>
                <div className="hOlCQp">
                  <img src="images/MYR-f32eb9a4907c2bf5ecb94dfb1fe11d52.png" />
                  <div>Malaysia</div>
                  <div>MYR</div>
                </div>
                <div className="hOlCQp">
                  <img src="images/PHP-0c415aeaafd28d0177b9372fc168e46d.png" />
                  <div>Philippines</div>
                  <div>PHP</div>
                </div>
                <div className="hOlCQp">
                  <img src="images/USD-43f31ace2be081aa51062507a7ba7471.png" />
                  <div>United States</div>
                  <div>USD</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="NTB_components-calculator-_home_segment">
          <div className="NTB_components-calculator-_input_inputContainer">
            <label style={{ "font-size": "1.2em" }}>Sending</label>
            <div className="NTB_components-calculator-_input_data">
              <div>SGD</div>
              <div className="NTB_components-calculator-_input_dataInput">
                <input placeholder="Input Here" value="1,000.00" />
              </div>
            </div>
          </div>
          <div className="NTB_components-calculator-_home_toarrow">
            <img
              src="images/toarrow-41e6e4cd371822cde42ff654a4efac91.svg"
              className="NTB_components-calculator-_home_toarrowsvg"
            />
          </div>
          <div className="NTB_components-calculator-_input_inputContainer">
            <label style={{ "font-size": "1.2em" }}>Recipient Gets</label>
            <div className="NTB_components-calculator-_input_data">
              <div>AUD</div>
              <div className="NTB_components-calculator-_input_dataInput">
                <input placeholder="Input Here" value="975.61" />
              </div>
            </div>
          </div>
        </div>
        <div className="NTB_components-calculator-_home_button">
          <div color="red" className="fKYoBj">
            <button color="red" className="a">
              Start Now
            </button>
          </div>
        </div>
        <div className="ieenks">
          <div className="kYBqwW" />
          <div className="htNcZ">
            <strong />
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
