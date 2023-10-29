/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const DropDown3 = ({ color = "#FAFAFA", className }) => {
  return (
    <svg
      className={`drop-down-3 ${className}`}
      fill="none"
      height="50"
      viewBox="0 0 51 50"
      width="51"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="path" clipRule="evenodd" d="M16.5 20L25.25 30L34 20H16.5Z" fill={color} fillRule="evenodd" />
    </svg>
  );
};

DropDown3.propTypes = {
  color: PropTypes.string,
};
