import React from "react";
import SelectCurrency from "./SelectCurrency";
import "./Calculator.css";

const data = {
  currencies: [
    {
      code: "AUD",
      sellRate: 1,
      name: "Australian Dollars",
      sign: "$"
    },
    {
      code: "USD",
      sellRate: 0.7041,
      name: "United States Dollars",
      sign: "$"
    },
    {
      code: "CAD",
      sellRate: 0.9504,
      name: "Canadian Dollars",
      sign: "$"
    },
    {
      code: "NZD",
      sellRate: 0.9949,
      name: "New Zealand Dollars",
      sign: "$"
    },
    {
      code: "JPY",
      sellRate: 78.21,
      name: "Japanese Yen",
      sign: "¥"
    },
    {
      code: "GBP",
      sellRate: 0.5472,
      name: "British Pounds Sterling",
      sign: "£"
    }
  ]
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currencies: data.currencies,
      currencyA: data.currencies[0],
      currencyB: data.currencies[1],
      currencyAval: data.currencies[0].sellRate,
      currencyBval: data.currencies[1].sellRate
    };

    this.onSelectCurrency = this.onSelectCurrency.bind(this);
  }

  onSelectCurrency(code) {
    //console.log('selecting currency: '+code);
    const { currencies, currencyAval } = this.state;
    const currency = currencies.filter(currency => currency.code === code);
    this.setState({
      currencyB: currency[0], // this is an array with one item
      currencyBval: currencyAval * currency[0].sellRate
    });
  }

  onChangeHandler(e, currency) {
    const { currencyA, currencyB } = this.state;

    if (currency === "A") {
      const newValueA = e.target.value;
      this.setState({
        currencyAval: newValueA,
        currencyBval: newValueA * currencyB.sellRate
      });
    } else if (currency === "B") {
      const newValueB = e.target.value;
      this.setState({
        currencyAval: newValueB / currencyB.sellRate,
        currencyBval: newValueB
      });
    }
  }

  render() {
    const {
      currencies,
      currencyA,
      currencyB,
      currencyAval,
      currencyBval
    } = this.state;
    return (
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h1>Currency Converter</h1>
          <div className="content">
            <div className="row row-select-currency">
              <div className="col-md-6 offset-md-3">
                <h2>Select Currency</h2>
                <p>
                  {
                    //Select currency
                  }
                  <SelectCurrency
                    currencies={currencies}
                    onSelectCurrency={this.onSelectCurrency}
                  />
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6 currency-from-input">
                <h3 className={`currency-flag ${currencyA.code}`}>
                  {currencyA.name}
                </h3>
                {
                  //Currency A input
                }
                <div className="input-group">
                  <span className="input-group-addon">{currencyA.sign}</span>
                  <input
                    type="number"
                    value={currencyAval}
                    className="form-control"
                    aria-describedby="basic-addon2"
                    step="1"
                    pattern="\d\.\d{2}"
                    onChange={e => {
                      this.onChangeHandler(e, "A");
                    }}
                  />
                  <span className="input-group-addon" id="basic-addon2">
                    {currencyA.code}
                  </span>
                </div>
              </div>
              <div className="col-sm-6 currency-to-input">
                <h3 className={`currency-flag ${currencyB.code}`}>
                  {currencyB.name}
                </h3>
                {
                  //Currency B input
                }
                <div className="input-group">
                  <span className="input-group-addon">{currencyB.sign}</span>
                  <input
                    type="number"
                    value={currencyBval}
                    className="form-control"
                    aria-describedby="basic-addon3"
                    step="1"
                    pattern="\d\.\d{2}"
                    onChange={e => {
                      this.onChangeHandler(e, "B");
                    }}
                  />
                  <span className="input-group-addon" id="basic-addon3">
                    {currencyB.code}
                  </span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                {
                  //Update to currently selected currency
                }
                <p>
                  Exchange Rate{" "}
                  {`${currencyA.sign} ${currencyA.sellRate} ${currencyA.code}`}{" "}
                  ={" "}
                  {`${currencyB.sign} ${currencyB.sellRate} ${currencyB.code}`}
                </p>
              </div>
            </div>
            <a href="tel:+84984676382">
              <i class="fas fa-phone" style={{ fontSize: "48px" }}>
                Call us 0984676382
              </i>
            </a>
            <br />
            <a href="https://www.facebook.com/alosend" target="_blank">
              <i
                className="fab fa-facebook-messenger"
                style={{ fontSize: "48px", marginRight: "20px" }}
              >
                Message us
              </i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
