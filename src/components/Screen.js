import React, { Component } from 'react'
import './css/screen.css'

export class Screen extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            
        }
    }
    

    render() {
        return (
            <div className="screen-panel">
                <span className="screen display">{this.props.display}</span>
            </div>
        )
    }
}

export default Screen
