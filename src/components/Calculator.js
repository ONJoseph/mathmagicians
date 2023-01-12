import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="screen">0</div>
        <div className="buttons">
          <div className="row">
            <div className="gray btn-normal">AC</div>
            <div className="gray btn-normal">+/-</div>
            <div className="gray btn-normal">%</div>
            <div className="first orange btn-normal">÷</div>
          </div>
          <div className="row">
            <div className="gray btn-normal">7</div>
            <div className="gray btn-normal">8</div>
            <div className="gray btn-normal">9</div>
            <div className="orange btn-normal">x</div>
          </div>
          <div className="row">
            <div className="gray btn-normal">4</div>
            <div className="gray btn-normal">5</div>
            <div className="gray btn-normal">6</div>
            <div className="orange btn-normal">-</div>
          </div>
          <div className="row">
            <div className="gray btn-normal">1</div>
            <div className="gray btn-normal">2</div>
            <div className="gray btn-normal">3</div>
            <div className="orange btn-normal">+</div>
          </div>
          <div className="row">
            <div className=" double gray btn-normal">0</div>
            <div className="last gray btn-normal">.</div>
            <div className="last orange btn-normal">=</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
