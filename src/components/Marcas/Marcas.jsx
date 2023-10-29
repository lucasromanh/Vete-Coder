/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Marcas = ({
  className,
  royalCaninLogoPs = "/img/royal-canin-logo-ps-1-1.png",
  kenLLogoPs = "/img/ken-l-logo-ps-1-1.png",
  clubPerformance = "/img/club-performance-logo-ps-1-1.png",
  oldPrinceLogoPs = "/img/old-prince-logo-ps-1-1.png",
  eukanubaLogoPs = "/img/eukanuba-logo-ps-1-1.png",
  topNutritionLogo = "/img/top-nutrition-logo-ps-1-1.png",
}) => {
  return (
    <div className={`marcas ${className}`}>
      <img className="img" alt="Royal canin logo ps" src={royalCaninLogoPs} />
      <img className="img" alt="Ken l logo ps" src={kenLLogoPs} />
      <img className="img" alt="Club performance" src={clubPerformance} />
      <img className="img" alt="Old prince logo ps" src={oldPrinceLogoPs} />
      <img className="img" alt="Eukanuba logo ps" src={eukanubaLogoPs} />
      <img className="img" alt="Top nutrition logo" src={topNutritionLogo} />
    </div>
  );
};

Marcas.propTypes = {
  royalCaninLogoPs: PropTypes.string,
  kenLLogoPs: PropTypes.string,
  clubPerformance: PropTypes.string,
  oldPrinceLogoPs: PropTypes.string,
  eukanubaLogoPs: PropTypes.string,
  topNutritionLogo: PropTypes.string,
};
