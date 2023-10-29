/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { DropDown3 } from "../../icons/DropDown3";
import { SeccionNombreWrapper } from "../SeccionNombreWrapper";
import "./style.css";

export const PropertyDefaultWrapper = ({ property1, className, seccionNombreWrapperText = "Sección" }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`property-default-wrapper ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <SeccionNombreWrapper
        divClassName={`${state.property1 === "default" ? "class" : "class-2"}`}
        text={seccionNombreWrapperText}
      />
      {state.property1 === "default" && <DropDown3 className="drop-down" color="black" />}

      {["variant-2", "variant-3"].includes(state.property1) && (
        <img
          className="drop-down"
          alt="Drop down"
          src={state.property1 === "variant-3" ? "/img/dropdown-1.svg" : "/img/dropdown.svg"}
        />
      )}
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

PropertyDefaultWrapper.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "variant-3", "default"]),
  seccionNombreWrapperText: PropTypes.string,
};
