/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const SeccionNombre = ({ text = "Sección" }) => {
  return (
    <div className="seccion-nombre">
      <div className="secci-n">{text}</div>
    </div>
  );
};

SeccionNombre.propTypes = {
  text: PropTypes.string,
};
