import React from "react";
import {connect} from 'react-redux';
import {stateMapper} from '../store.js';
import {calculateSquare} from '../actions/actions.js';

class SquareButtonComponent extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let num = this.props.number;
    calculateSquare(num)

  }
  render() {
    return (
      <button type="button" className="btn btn-outline-dark" onClick={this.handleClick} >Square</button>
    )
  }
  
}
let SquareButton = connect(stateMapper)(SquareButtonComponent);

export default SquareButton;
