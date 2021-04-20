import React, { Component } from "react";
import { connect } from "react-redux";

import "./Calculator.css";

import { operators } from "../operators";
import {
  enterNumber,
  setOperator,
  percentage,
  clear,
  evaluate,
  toggleNegative,
} from "../functionality";

import CalculatorButton from "./CalculatorButton/CalculatorButton";
import Display from "./Display/Display";

export class Calculator extends Component {
  render() {
    const {
      currentValue,
      previousValue,
      enterNumber,
      setOperator,
      percentage,
      clear,
      evaluate,
      toggleNegative,
    } = this.props;
    const numberButtons = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0].map((number) => (
      <CalculatorButton
        callback={() => enterNumber(number)}
        key={number}
        value={number}
        wide={number === 0}
      />
    ));

    return (
      <main className='calculator'>
        <Display value={currentValue || previousValue} />
        <div className='calculator__buttons-wrapper'>
          <section className='calculator__left-buttons'>
            <CalculatorButton
              backgroundColor='#bfd8bd'
              callback={clear}
              value='AC'
            />
            <CalculatorButton
              backgroundColor='#bfd8bd'
              callback={toggleNegative}
              value='+/-'
            />
            <CalculatorButton
              backgroundColor='#bfd8bd'
              callback={percentage}
              value='%'
            />
            {numberButtons}
            <CalculatorButton callback={() => enterNumber(".")} value='.' />
          </section>
          <section className='calculator__operator-buttons'>
            <CalculatorButton
              backgroundColor='#98c9a3'
              callback={() => setOperator(operators.DIVIDE)}
              color='#ffffff'
              value='÷'
            />
            <CalculatorButton
              backgroundColor='#98c9a3'
              callback={() => setOperator(operators.MULTIPLY)}
              color='#ffffff'
              value='×'
            />
            <CalculatorButton
              backgroundColor='#98c9a3'
              callback={() => setOperator(operators.SUBTRACT)}
              color='#ffffff'
              value='-'
            />
            <CalculatorButton
              backgroundColor='#98c9a3'
              callback={() => setOperator(operators.ADD)}
              color='#ffffff'
              value='+'
            />
            <CalculatorButton
              backgroundColor='#6bab90'
              callback={evaluate}
              color='#ffffff'
              value='='
            />
          </section>
        </div>
      </main>
    );
  }
}

export default connect((state) => state, {
  enterNumber,
  setOperator,
  percentage,
  clear,
  evaluate,
  toggleNegative,
})(Calculator);
