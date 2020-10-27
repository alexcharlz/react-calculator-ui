import React, { Component } from 'react'
// import Buttons from './components/Buttons.js'
import Screen from './components/Screen.js'
import './App.css'

export class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      operator: '',
      display: '',
      previous: '',
    }
    this.getInput = this.getInput.bind(this)
    this.getOperator = this.getOperator.bind(this)
    this.reset = this.reset.bind(this)
    this.process = this.process.bind(this)
  }

  getInput(params){
    this.setState({
      display: this.state.display.concat(params)
    })
  }

  getOperator(operator){
    this.setState({
      display: this.state.display.concat(operator)
    })
  }

  reset(){
    this.setState({
      operator: '',
      display: '',
      previous: '',
    })
  }

  process(){
    this.setState({
      display: String(eval(this.state.display))
    })
  }




  render() {
    return (
      <div className="App">
        <div className="calculator">

          <Screen display={this.state.display} />

          <div className="button-panel">
                <span></span>
                <span></span>
                <span></span>
                <span onClick={this.reset}>cls</span>
                <span onClick={() => this.getInput(7)}>7</span>
                <span onClick={() => this.getInput(8)}>8</span>
                <span onClick={() => this.getInput(9)}>9</span>
                <span onClick={() => this.getOperator('+')}>+</span>
                <span onClick={() => this.getInput(4)}>4</span>
                <span onClick={() => this.getInput(5)}>5</span>
                <span onClick={() => this.getInput(6)}>6</span>
                <span onClick={() => this.getOperator('-')}>-</span>
                <span onClick={() => this.getInput(1)}>1</span>
                <span onClick={() => this.getInput(2)}>2</span>
                <span onClick={() => this.getInput(3)}>3</span>
                <span onClick={() => this.getOperator('*')}>*</span>
                <span onClick={() => this.getInput(0)}>0</span>
                <span onClick={() => this.getOperator('.')}>.</span>
                <span onClick={this.process}>=</span>
                <span onClick={() => this.getOperator('/')}>/</span>
            </div>

        </div>
      </div>
    )
  }
}

export default App
