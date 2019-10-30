import React from "react";
import { connect } from "react-redux";
import {
  squareAction,
  cubeAction,
  sqrRootAction
} from "../actions/numberActions";
import Input from "./Input";
import SquareButton from "./SquareButton";
import CubeButton from "./CubeButton";
import SquareRootButton from "./SquareRootButton";

const App = props => {
  return (
    <div className="container text-center mt-5">
      <Input />
      <SquareButton sqr={props.sqr} />
      <CubeButton cube={props.cube} />
      <SquareRootButton sqrt={props.sqrt} />
      <h1 className="text-dark display-3 text-left">Result: {props.result}</h1>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    result: state.result
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sqr: () => dispatch(squareAction()),
    cube: () => dispatch(cubeAction()),
    sqrt: () => dispatch(sqrRootAction())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
