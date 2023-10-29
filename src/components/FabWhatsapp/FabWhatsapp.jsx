/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const FabWhatsapp = ({ property1, className, icBaselineWhatsapp = "/img/ic-baseline-whatsapp-1.svg" }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`FAB-whatsapp ${state.property1} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <img
        className="ic-baseline-whatsapp"
        alt="Ic baseline whatsapp"
        src={state.property1 === "variant-2" ? "/img/ic-baseline-whatsapp-2.svg" : icBaselineWhatsapp}
      />
      <div className="text-wrapper">¿Ayuda?</div>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "variant-2",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "default",
      };
  }

  return state;
}

FabWhatsapp.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
  icBaselineWhatsapp: PropTypes.string,
};
