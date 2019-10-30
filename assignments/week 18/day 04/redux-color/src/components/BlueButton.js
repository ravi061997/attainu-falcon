import React from 'react'
import {stateMapper} from '../store.js';
import {connect} from 'react-redux'
import {changeColorToBlue} from '../actions/actions.js'

class BlueButtonComponent extends React.Component {
    constructor(props){
        super(props)
        this.changeColor = this.changeColor.bind(this);
    }
    changeColor(){
        changeColorToBlue()
    }
    render() {
        return(
            <div>
                <button type="button" className="btn btn-primary" onClick ={this.changeColor}>Blue Button</button>
            </div>
        )
    }
}

let BlueButton = connect(stateMapper)(BlueButtonComponent);
export default BlueButton;