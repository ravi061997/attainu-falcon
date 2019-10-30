import React from "react";

const SquareRootButton = props => {
  return (
    <button
      type="button"
      className="btn btn-warning btn-lg m-4"
      onClick={props.sqrt}
    >
      Square Root
    </button>
  );
};

export default SquareRootButton;
