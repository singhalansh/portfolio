import React from "react";
import meimg from "../assets/me.png";

function Right() {
  return (
    <div className="w-full lg:w-1/2 h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen relative bg-transparent flex items-center justify-center lg:items-end">
      <img
        src={meimg}
        alt="ansh"
        className="h-[90%] w-auto max-w-none object-contain grayscale contrast-125 brightness-105 fade-in lg:absolute lg:-left-20 xl:-left-32 2xl:-left-40 transition-all duration-300"
      />
    </div>
  );
}

export default Right;