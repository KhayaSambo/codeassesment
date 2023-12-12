// import React and the Grid component from react-grid-layout
import React from "react";
import styles from "./brands.module.css";

// create an array of objects that represent the logos
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

// create a function component that renders the image grid
const Brands = () => {


  // return the JSX element
  return (
    <div className='container'>
           <div className="heading-tab">
          <hr /> 
          <span>You'll be in good company</span>
        </div>
   
        <h1>Trusted by leading brands</h1>
     
      {/* render the grid container with flexbox */}
      <div className="grid">
        {/* map each logo to an image element */}
        {logos.map((logo, index) => (
          <img key={index} src={logo.src} alt={logo.alt} />
        ))}
      </div>
    </div>
    
  );
};

export default Brands;

