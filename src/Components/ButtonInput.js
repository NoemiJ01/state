import React, { Component } from "react";

class ButtonInput extends Component {
  // Add a constructor with a state
  constructor(props) {
    super(props);
    this.state = {
      text: null
    };
  }
  //Make a function to handle the event
  handleChange = (event) => {
    this.setState({ ButtonInput: event.target.value });
  };
  render() {
    return (
      <li className="cards-item">
        <div className="card">
          <div className="card-content">
            <div className="card-title">ButtonInput</div>
            <p className="card-text">
              <div className="input btn-block">
                <input type="textInput" onChange={this.handleChange} />
              </div>
              <div className="output">
                <label for="dateOutput">State: {this.state.ButtonInput} </label>
                <span name="dateOutput"></span>
              </div>
            </p>
          </div>
        </div>
      </li>
    );
  }
}

export default ButtonInput;
