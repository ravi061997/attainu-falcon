import React from "react";
import {connect} from 'react-redux';
import {stateMapper} from '../store.js';
import {calculateCube} from '../actions/actions.js'

class CubeButtonComponent extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let num = this.props.number;
    calculateCube(num)

  }
  render() {
    return (
      <button type="button" className="btn btn-outline-dark" onClick={this.handleClick} >Cube</button>
    )
  }
  
}
let CubeButton = connect(stateMapper)(CubeButtonComponent);

export default CubeButton;
