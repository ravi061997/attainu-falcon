import React from "react";

const SquareButton = props => {
  return (
    <button
      type="button"
      className="btn btn-primary btn-lg m-4"
      onClick={props.sqr}
    >
      Square
    </button>
  );
};

export default SquareButton;
