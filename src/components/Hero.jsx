import React from "react";
import Left from "./Left";
import Right from "./Right";

function Hero() {
  return (
    <div className="h-fit min-h-[100vh] md:min-h-screen flex flex-col lg:flex-row relative overflow-hidden">
      {/* Let's Talk Button */}
      <a
        href="#contact"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8 z-50 px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base lg:text-lg font-semibold border-2 border-[var(--color-primary)] text-[var(--color-primary)] overflow-hidden group"
      >
        <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
          Let's Talk!
        </span>
        <span className="absolute inset-0 bg-[var(--color-primary)] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
      </a>
      <Left />
      <Right />
    </div>
  );
}

export default Hero;