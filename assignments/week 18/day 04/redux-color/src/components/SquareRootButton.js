import React from "react";
import {connect} from 'react-redux';
import {stateMapper} from '../store.js';
import {calculateSquareRoot} from '../actions/actions.js';

class SquareRootButtonComponent extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let num = this.props.number;
    calculateSquareRoot(num)  
  }
  render() {
    return (
      <button type="button" className="btn btn-outline-dark" onClick={this.handleClick} >SquareRoot</button>
    )
  }
  
}
let SquareRootButton = connect(stateMapper)(SquareRootButtonComponent);

export default SquareRootButton;
