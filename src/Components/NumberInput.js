import React, { Component } from "react";

class NumberInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: null
    };
  }
  //Make a function to handle the event
  handleChange = (event) => {
    this.setState({ num: event.target.value });
  };
  render() {
    return (
      <li className="cards-item">
        <div className="card">
          <div className="card-content">
            <div className="card-title">Date</div>
            <p className="card-text">
              <div className="input btn-block">
                <input type="textInput" onChange={this.handleChange} />
              </div>
              <div className="output">
                <label for="dateOutput">State: {this.state.num} </label>
                <span name="dateOutput"></span>
              </div>
            </p>
          </div>
        </div>
      </li>
    );
  }
}
export default NumberInput;
