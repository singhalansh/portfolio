import React from "react";
import meimg from "../assets/me.png";

function Right() {
  return (
    <div className="w-full lg:w-1/2 h-56 sm:h-64 md:h-72 lg:h-screen overflow-visible relative bg-[#f8f8f8] flex items-end justify-center lg:justify-end">
      <img
        src={meimg}
        alt="ansh"
        className="h-full w-auto max-w-none object-contain grayscale contrast-125 brightness-105 fade-in lg:absolute lg:right-50 lg:bottom-0"
      />
    </div>
  );
}

export default Right;