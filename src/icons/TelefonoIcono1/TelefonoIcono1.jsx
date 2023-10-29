/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const TelefonoIcono1 = ({ color = "#1F1F1F", className }) => {
  return (
    <svg
      className={`telefono-icono-1 ${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M30.8375 1.53814L24.3376 0.0381751C23.6314 -0.124322 22.9064 0.244421 22.6189 0.906907L19.619 7.90676C19.3565 8.51925 19.5315 9.23798 20.0502 9.65672L23.8376 12.7567C21.5877 17.5503 17.6565 21.5377 12.7629 23.8314L9.66295 20.044C9.23796 19.5253 8.52547 19.3503 7.91298 19.6128L0.913132 22.6127C0.244396 22.9064 -0.124346 23.6314 0.0381502 24.3377L1.53812 30.8375C1.69437 31.5125 2.29435 32 3.00059 32C19.0065 32 32 19.0315 32 3.00061C32 2.30063 31.5187 1.69439 30.8375 1.53814Z"
        fill={color}
      />
    </svg>
  );
};

TelefonoIcono1.propTypes = {
  color: PropTypes.string,
};
