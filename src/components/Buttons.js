import React, { Component } from 'react'
import './css/buttons.css'

export class Buttons extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="button-panel">
                <span myFunction={getInput(2)}>&radic;</span>
                <span><sup>2</sup></span>
                <span><sup>3</sup></span>
                <span>x</span>
                <span>7</span>
                <span>8</span>
                <span>9</span>
                <span>+</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
                <span>-</span>
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>*</span>
                <span>0</span>
                <span>.</span>
                <span>=</span>
                <span>/</span>
            </div>
        )
    }
}

export default Buttons
