/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { CartIcono16 } from "../../icons/CartIcono16";
import "./style.css";

export const BotonIconoCarrito = ({ className }) => {
  return (
    <div className={`boton-icono-carrito ${className}`}>
      <CartIcono16 className="cart-icono" />
      <div className="label">Agregar</div>
    </div>
  );
};
