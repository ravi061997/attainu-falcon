import React from 'react'
import {stateMapper} from '../store.js';
import {connect} from 'react-redux';
import {changeColorToRed} from '../actions/actions.js'

class RedButtonComponent extends React.Component {
    constructor(props){
        super(props)
        this.changeColor = this.changeColor.bind(this);
    }
    changeColor(){
        changeColorToRed()
    }
    render() {
        return(
            <div>
                <button type="button" className="btn btn-danger" onClick ={this.changeColor}>Red Button</button>
            </div>
        )
    }
}

let RedButton = connect(stateMapper)(RedButtonComponent)
export default RedButton;