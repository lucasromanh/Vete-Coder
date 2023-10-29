/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { BotonIconoCarrito } from "../BotonIconoCarrito";
import "./style.css";

export const CardPromociones = ({ property1, imagen = "/img/imagen-3-2.png" }) => {
  return (
    <div className="card-promociones">
      <div className="alimento-club">
        {property1 === "variant-3" && <p className="text-wrapper-8">Alimento Club Performance Gato Adulto</p>}

        {property1 === "variant-5" && <>Alimento Eukanuba Perro&nbsp;&nbsp;raza Pequeña</>}

        {property1 === "default" && <p className="text-wrapper-8">Alimento Royal Canin Gatito Kitten</p>}

        {property1 === "variant-2" && <p className="text-wrapper-8">Alimento Royal Canin Perro Caniche Adulto</p>}

        {property1 === "variant-4" && <p className="text-wrapper-8">Alimento Club Performance Perro Adulto</p>}
      </div>
      <div className={`element property-1-1-${property1}`}>
        {property1 === "default" && <>$2.300</>}

        {property1 === "variant-2" && <>$3.500</>}

        {property1 === "variant-4" && <>$7.000</>}

        {property1 === "variant-3" && <>$5.000</>}

        {property1 === "variant-5" && <>$6.000</>}
      </div>
      {["default", "variant-2", "variant-4"].includes(property1) && (
        <img
          className="imagen"
          alt="Imagen"
          src={
            property1 === "variant-2"
              ? "/img/imagen-2-2.png"
              : property1 === "variant-4"
              ? "/img/imagen-4-2.png"
              : "/img/imagen-1-2.png"
          }
        />
      )}

      {["variant-3", "variant-5"].includes(property1) && (
        <div className="imagen-wrapper">
          <img
            className={`imagen-2 property-1-2-${property1}`}
            alt="Imagen"
            src={property1 === "variant-5" ? "/img/imagen-5-2.png" : imagen}
          />
        </div>
      )}

      <BotonIconoCarrito className="boton-icono-carrito-instance" />
    </div>
  );
};

CardPromociones.propTypes = {
  property1: PropTypes.oneOf(["default", "variant-5", "variant-2", "variant-3", "variant-4"]),
  imagen: PropTypes.string,
};
