import React from "react";

const CubeButton = props => {
  return (
    <button
      type="button"
      className="btn btn-success btn-lg m-4"
      onClick={props.cube}
    >
      Cube
    </button>
  );
};

export default CubeButton;
