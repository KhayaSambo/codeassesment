import React from "react";
import styles from "./brands.module.css";

/**
 * Represents an array of objects that represent the logos.
 * Each logo object contains the source and alternative text.
 * Left the data here instead of fetching it from an API to simplify access and readability.
 */
const logos = [
  { src: "assets/brands/visa.svg", alt: "VISA" },
  { src: "assets/brands/tyme.svg", alt: "TymeBank" },
  { src: "assets/brands/distell.svg", alt: "DISTELL" },
  { src: "assets/brands/spotify.svg", alt: "Spotify" },
  { src: "assets/brands/microsoft.svg", alt: "Microsoft" },
  { src: "assets/brands/engen.svg", alt: "ENGEN" },
  { src: "assets/brands/nike.svg", alt: "Nike" },
  { src: "assets/brands/wesgrow.svg", alt: "WESGRO" },
  { src: "assets/brands/multichoice.svg", alt: "Multichoice" },
  { src: "assets/brands/pnp.svg", alt: "PicknPay" },
  { src: "assets/brands/liquid.svg", alt: "LIQUID" },
  { src: "assets/brands/tfg.svg", alt: "TFG " },
  { src: "assets/brands/sanlam.svg", alt: "Sanlam" },
  { src: "assets/brands/sntam.svg", alt: "Santam" },
  { src: "assets/brands/bbc.svg", alt: "BBC" },
];

/**
 * Renders the image grid of trusted brands.
 */
const Brands = () => {
  return (
    <div className='container'>
      <div className="heading-tab">
        <hr /> 
        <span>You'll be in good company</span>
      </div>
      <h1>Trusted by leading brands</h1>
      <div className="grid">
        {/* Decided to go with a dynamic approach to optimise the layout and to write less */}
        {logos.map((logo, index) => (
          <img key={index} src={logo.src} alt={logo.alt} />
        ))}
      </div>
    </div>
  );
};

export default Brands;
