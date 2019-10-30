import React from 'react';
import {connect} from 'react-redux';
import {stateMapper,store} from '../store.js';

class InputComponent extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    let num = parseInt(event.target.value);
    store.dispatch({
      type:"NUMBER_CHANGED",
      typedNumber:num
    });
  }
  render() {
    return(
      <input className="form-control" type = "number" onChange = {this.handleChange}  style={{ backgroundColor:this.props.color}}/>
    )
  }
}
let Input = connect(stateMapper)(InputComponent);

export default Input;
