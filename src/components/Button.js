import React from "react";

import "./Button.css";

const Button = ({ sympol, color, handelClick }) => {
  return (
    <button
      onClick={() => handelClick(sympol)}
      className="button-wrapper"
      style={{ backgroundColor: color }}
    >
      {sympol}
    </button>
  );
};

export default Button;
