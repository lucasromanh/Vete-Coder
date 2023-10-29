/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { CartIcono6 } from "../../icons/CartIcono6";
import { Property1Variant21 } from "../../icons/Property1Variant21";
import { LogoNavBar } from "../LogoNavBar";
import { PropertyDefaultWrapper } from "../PropertyDefaultWrapper";
import { SeccionNombre } from "../SeccionNombre";
import "./style.css";

export const NavBar = ({ className }) => {
  return (
    <div className={`nav-bar ${className}`}>
      <LogoNavBar className="logo-nav-bar-instance" />
      <div className="frame-2">
        <SeccionNombre text="Home" />
        <SeccionNombre text="Servicios" />
        <PropertyDefaultWrapper
          className="seccion-nombre-dropdown"
          property1="default"
          seccionNombreWrapperText="Pet Shop"
        />
        <SeccionNombre text="Nosotros" />
        <div className="iconos">
          <Property1Variant21 className="buscar-icono" color="#FAFAFA" />
          <CartIcono6 className="cart-icono-6" />
        </div>
      </div>
    </div>
  );
};
