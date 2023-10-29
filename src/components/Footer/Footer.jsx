/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { EmailIcono1 } from "../../icons/EmailIcono1";
import { FacebookIcono2 } from "../../icons/FacebookIcono2";
import { InstagramIcono } from "../../icons/InstagramIcono";
import { WhatsappIcono } from "../../icons/WhatsappIcono";
import { MmLogoNegroLetras } from "../MmLogoNegroLetras";
import { TelefonoIcono } from "../TelefonoIcono";
import { UbicacionIcono } from "../UbicacionIcono";
import "./style.css";

export const Footer = ({
  className,
  whatsappIconoColor = "black",
  facebookIcono2Color = "black",
  instagramIconoColor = "black",
}) => {
  return (
    <div className={`footer ${className}`}>
      <div className="contacto">
        <div className="div">Contactanos</div>
        <div className="ubicaci-n">
          <UbicacionIcono className="ubicacion-icono-instance" />
          <div className="text-wrapper-2">Dirección 123</div>
        </div>
        <div className="telefono">
          <TelefonoIcono className="telefono-icono-instance" />
          <div className="text-wrapper-3">123 456 789</div>
        </div>
        <div className="mail">
          <div className="text-wrapper-4">mail@mail.com</div>
          <EmailIcono1 className="email-icono" />
        </div>
      </div>
      <MmLogoNegroLetras />
      <div className="frame">
        <div className="redes-sociales">
          <WhatsappIcono className="whatsapp-icono" color={whatsappIconoColor} />
          <FacebookIcono2 className="facebook-icono" color={facebookIcono2Color} />
          <InstagramIcono className="instagram-icono" color={instagramIconoColor} />
        </div>
        <div className="link-salta-coders">
          <img className="group" alt="Group" src="/img/group-1.png" />
          <div className="linked-SALTA-CODER">SALTA CODERS</div>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  whatsappIconoColor: PropTypes.string,
  facebookIcono2Color: PropTypes.string,
  instagramIconoColor: PropTypes.string,
};
