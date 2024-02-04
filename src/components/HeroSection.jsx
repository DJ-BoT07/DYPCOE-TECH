import React from 'react';
import podiumImage from "../assets/podium3.jpg";
import logoImage from "../assets/logo2.png";
import insaanImage from "../assets/insaan.png";

const HeroSection = () => {
  return (
    <div className="relative h-3/4 md:h-screen w-3/4 md:w-screen overflow-hidden mx-auto">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${podiumImage})` }}
      ></div>

      {/* Centered Container for insaan.png and logoImage */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Logo Image */}
        <div className="relative w-3/4 h-3/4 z-10">
          <img src={logoImage} alt="Logo" className="absolute inset-0 w-full h-full max-h-full scale-50" />
          <img
            src={insaanImage}
            alt="Background"
            className="absolute inset-0 w-[50%] h-full object-cover opacity-30 rotate-180 filter brightness-75 contrast-75 mt-auto mb-auto"
          />
        </div>

        {/* Middle Image (insaan.png) */}
        {/* <div className="relative w-[40%] h-1/2 opacity-50 z-0">

        </div> */}
      </div>
    </div>
  );
};

export default HeroSection;
