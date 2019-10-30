import React from 'react'
import {stateMapper} from '../store.js';
import {connect} from 'react-redux';
import {changeColorToGreen} from '../actions/actions.js'

class GreenButtonComponent extends React.Component {
    constructor(props){
        super(props)
        this.changeColor = this.changeColor.bind(this);
    }
    changeColor(){
        changeColorToGreen()
    }
    render() {
        return(
            <div>
                <button type="button" className="btn btn-success" onClick ={this.changeColor}>Green Button</button>
            </div>
        )
    }
}

let GreenButton = connect(stateMapper)(GreenButtonComponent);
export default GreenButton;