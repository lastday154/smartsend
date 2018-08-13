import React, { Component } from "react";

class Faq extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cQTDZd">
              <div className="fwvxEm" />
              <div className="fBMMTC">
                <ul>
                  <li>
                    <span>FAQ</span>
                  </li>
                  <li>
                    <i className="bSwDEC" />
                  </li>
                  <li>How does AloSend work?</li>
                </ul>
              </div>
              <div className="dIGbVH" />
              <div className="lpdimb">How does AloSend work?</div>
              <div className="dIGbVH" />
              <div className="cuSFlJ">
                <span
                  style={{
                    "font-family":
                      "&quot;helvetica neue&quot;, &quot;segoe ui&quot;, arial",
                    "text-decoration": "underline",
                    "padding-bottom": "5px",
                    display: "inline-block",
                    "font-weight": "bold"
                  }}
                >
                  Making a transfer
                </span>
                <br />
                There are 2 steps to making an overseas transfer.
                <div style={{ padding: "10px 0px 0px 30px" }}>
                  <div style={{ display: "flex" }}>
                    <span style={{ "padding-right": "17px" }}>1) </span>
                    Starting a transfer in the AloSend web portal:
                  </div>
                  <div style={{ display: "flex" }}>
                    <span style={{ "padding-right": "17px" }}>2) </span>
                    Funding your order by bank transfer to our bank account or
                    by cash at our office
                  </div>
                </div>
                <br />
                <br />
                <span
                  style={{
                    "font-family":
                      "&quot;helvetica neue&quot;, &quot;segoe ui&quot;, arial",
                    "text-decoration": "underline",
                    "padding-bottom": "5px",
                    display: "inline-block",
                    "font-weight": "bold"
                  }}
                >
                  A) Starting a transfer
                </span>
                <br />
                <span style={{ "padding-right": "17px" }}>
                  Place an order by clicking on the “Transfer” button in AloSend
                  with the country & amount to send to, along with the details
                  of your recipient. We will provide you with the funding
                  details (your transaction reference number, and the bank
                  account & amount to send funds to). Once you successfully fund
                  the order, we will process your transaction.
                </span>
                <br />
                <br />
                <span
                  style={{
                    "font-family":
                      "&quot;helvetica neue&quot;, &quot;segoe ui&quot;, arial",
                    "text-decoration": "underline",
                    "padding-bottom": "5px",
                    display: "inline-block",
                    "font-weight": "bold"
                  }}
                >
                  B) Funding your order
                </span>
                <br />
                To fund your order, please give cash at our office or send a
                FAST transfer from your bank account (with a FAST-network) bank
                in Vietnam, to the following Bank account: {"\n"}
                <br />
                <br />
                Payee Name: Hoang Minh Tuan {"\n"}
                Payee Bank: Vietcombank {"\n"}
                Payee Account No.: 0711000214388
                {"\n"}
                <br />
                <br />
                The amount to be funded must be exactly the same as the amount
                indicated (in VND) in the order confirmation screen. This is
                important because your funding will be rejected if it is
                different from the order amount (even if it differs by 1000
                VND).
              </div>
              <div className="gMnxOW" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Faq;
