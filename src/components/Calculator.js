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
              backgroundColor='#d6d6d6'
              callback={clear}
              value='AC'
            />
            <CalculatorButton
              backgroundColor='#d6d6d6'
              callback={toggleNegative}
              value='+/-'
            />
            <CalculatorButton
              backgroundColor='#d6d6d6'
              callback={percentage}
              value='%'
            />
            {numberButtons}
            <CalculatorButton callback={() => enterNumber(".")} value='.' />
          </section>
          <section className='calculator__operator-buttons'>
            <CalculatorButton
              backgroundColor='#f5923e'
              callback={() => setOperator(operators.DIVIDE)}
              color='#ffffff'
              value='÷'
            />
            {/* fixed with the correct symbol */}
            <CalculatorButton
              backgroundColor='#f5923e'
              callback={() => setOperator(operators.MULTIPLY)}
              color='#ffffff'
              value='×'
            />
            <CalculatorButton
              backgroundColor='#f5923e'
              callback={() => setOperator(operators.SUBTRACT)}
              color='#ffffff'
              value='-'
            />
            {/*Fixed the button with the right callback (setting add instead of subtract)*/}
            <CalculatorButton
              backgroundColor='#f5923e'
              callback={() => setOperator(operators.ADD)}
              color='#ffffff'
              value='+'
            />
            {/* Removing the extra = button fixes the formatting.*/}
            <CalculatorButton
              backgroundColor='#f5923e'
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
