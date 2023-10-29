/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { CardPromociones } from "../CardPromociones";
import "./style.css";

export const CarruselCards = ({ cardPromocionesImagen = "/img/imagen-3-2.png" }) => {
  return (
    <div className="carrusel-cards">
      <CardPromociones property1="default" />
      <CardPromociones property1="variant-2" />
      <CardPromociones imagen={cardPromocionesImagen} property1="variant-3" />
      <CardPromociones property1="variant-4" />
      <CardPromociones property1="variant-5" />
    </div>
  );
};

CarruselCards.propTypes = {
  cardPromocionesImagen: PropTypes.string,
};
