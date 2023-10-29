/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { CarruselCards } from "../CarruselCards";
import { FabWhatsapp } from "../FabWhatsapp";
import { Footer } from "../Footer";
import { Marcas } from "../Marcas";
import { MmLogoNegroLetras } from "../MmLogoNegroLetras";
import { NavBar } from "../NavBar";
import "./style.css";

export const HomeTemplate = () => {
  return (
    <div className="home-template">
      <div className="overlap">
        <img className="fondo-verde" alt="Fondo verde" src="/img/fondo-verde.png" />
        <img className="patron-huellas" alt="Patron huellas" src="/img/patron-huellas.svg" />
        <p className="ofrecemos-servicios">
          {" "}
          Ofrecemos servicios médicos avanzados, desde exámenes de salud preventivos hasta cirugías especializadas.
        </p>
        <FabWhatsapp
          className="FAB-whatsapp-instance"
          icBaselineWhatsapp="/img/ic-baseline-whatsapp.svg"
          property1="default"
        />
        <p className="p">Trabajamos con las mejores marcas</p>
        <Footer
          className="footer-instance"
          facebookIcono2Color="#1F1F1F"
          instagramIconoColor="#1F1F1F"
          whatsappIconoColor="#1F1F1F"
        />
        <Marcas
          className="marcas-instance"
          clubPerformance="/img/club-performance-logo-ps-1.png"
          eukanubaLogoPs="/img/eukanuba-logo-ps-1.png"
          kenLLogoPs="/img/ken-l-logo-ps-1.png"
          oldPrinceLogoPs="/img/old-prince-logo-ps-1.png"
          royalCaninLogoPs="/img/royal-canin-logo-ps-1.png"
          topNutritionLogo="/img/top-nutrition-logo-ps-1.png"
        />
        <div className="text-wrapper-5">Alimentos balanceados con descuento</div>
        <div className="carusel">
          <CarruselCards cardPromocionesImagen="/img/imagen-3.png" />
        </div>
        <NavBar className="nav-bar-instance" />
        <div className="text-wrapper-6">Bienvenidos</div>
        <p className="text-wrapper-7">En Mundo Mascotas somos expertos en cuidado animal.</p>
        <MmLogoNegroLetras className="mm-logo-negro-letras-1" />
        <div className="animales">
          <div className="overlap-group">
            <img className="perrito" alt="Perrito" src="/img/perrito-malvado3-1.png" />
            <img className="gatite" alt="Gatite" src="/img/gatite-1.png" />
            <div className="ellipse" />
          </div>
        </div>
      </div>
    </div>
  );
};
