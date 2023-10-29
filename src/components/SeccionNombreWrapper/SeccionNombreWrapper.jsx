/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const SeccionNombreWrapper = ({ divClassName, text = "Sección" }) => {
  return (
    <div className="seccion-nombre-wrapper">
      <div className={`secci-n-2 ${divClassName}`}>{text}</div>
    </div>
  );
};

SeccionNombreWrapper.propTypes = {
  text: PropTypes.string,
};
