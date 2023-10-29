/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const FacebookIcono2 = ({ color = "black", className }) => {
  return (
    <svg
      className={`facebook-icono-2 ${className}`}
      fill="none"
      height="100"
      viewBox="0 0 100 100"
      width="100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle className="circle" cx="50" cy="50" fill={color} r="50" />
      <path
        className="path"
        d="M61.3644 27.334V34.474H57.1175C56.5546 34.4021 55.9828 34.4521 55.4409 34.6206C54.899 34.7892 54.3997 35.0724 53.9769 35.4509L53.9806 35.4472C53.3728 36.2998 53.086 37.3398 53.1706 38.3834V38.3684V43.4797H61.1L60.05 51.4859H53.1819V72.0097H44.9V51.484H38V43.4797H44.9V37.5828C44.8103 36.1585 45.014 34.731 45.4984 33.3887C45.9828 32.0464 46.7377 30.8178 47.7163 29.779L47.7106 29.7847C48.7094 28.8383 49.89 28.1046 51.1809 27.6283C52.4717 27.1519 53.8459 26.9427 55.22 27.0134H55.1956C57.3299 26.9782 59.464 27.0941 61.5819 27.3603L61.3625 27.3378L61.3644 27.334Z"
        fill="#9DBCB2"
      />
    </svg>
  );
};

FacebookIcono2.propTypes = {
  color: PropTypes.string,
};
