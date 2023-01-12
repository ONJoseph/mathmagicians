import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState({});
  const clickHandler = (e) => {
    setState(calculate(state, e.target.textContent));
  };
  const { next, total, operation } = state;
  return (
    <div className="container">
      <div className="screen">{ next || operation || total || 0 }</div>
      <div className="buttons">
        <div className="row">
          <button type="button" onClick={clickHandler} className="gray btn-normal">AC</button>
          <button type="button" onClick={clickHandler} className="gray btn-normal">+/-</button>
          <button type="button" onClick={clickHandler} className="gray btn-normal">%</button>
          <button type="button" onClick={clickHandler} className="first orange btn-normal">÷</button>
        </div>
        <div className="row">
          <button type="button" onClick={clickHandler} className="gray btn-normal">7</button>
          <button type="button" onClick={clickHandler} className="gray btn-normal">8</button>
          <button type="button" onClick={clickHandler} className="gray btn-normal">9</button>
          <button type="button" onClick={clickHandler} className="orange btn-normal">x</button>
        </div>
        <div className="row">
          <button type="button" onClick={clickHandler} className="gray btn-normal">4</button>
          <button type="button" onClick={clickHandler} className="gray btn-normal">5</button>
          <button type="button" onClick={clickHandler} className="gray btn-normal">6</button>
          <button type="button" onClick={clickHandler} className="orange btn-normal">-</button>
        </div>
        <div className="row">
          <button type="button" onClick={clickHandler} className="gray btn-normal">1</button>
          <button type="button" onClick={clickHandler} className="gray btn-normal">2</button>
          <button type="button" onClick={clickHandler} className="gray btn-normal">3</button>
          <button type="button" onClick={clickHandler} className="orange btn-normal">+</button>
        </div>
        <div className="row">
          <button type="button" onClick={clickHandler} className=" double gray btn-normal">0</button>
          <button type="button" onClick={clickHandler} className="last gray btn-normal">.</button>
          <button type="button" onClick={clickHandler} className="last oraange btn-normal">=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
