import React from "react";
import LeftNav from "./LeftNav";

function Left() {
  return (
    <div
      className="w-full lg:w-[50%] h-auto lg:h-screen flex flex-col left"
      style={{ background: "#f8f8f8" }}
    >
      <LeftNav />

      <div className="flex flex-grow w-full overflow-hidden">
        {/* Sidebar - Hidden on mobile, visible on tablet and up */}
        <div className="hidden md:flex w-[15%] lg:w-[10%] h-full flex-col items-center justify-between py-0 relative pl-4 lg:pl-8">
          <span
            className="text-xs text-gray-400 font-medium select-none tracking-wider mb-2 mt-4"
            style={{
              writingMode: "vertical-rl",
              textOrientation: "mixed",
              letterSpacing: "0.1em",
            }}
          >
            Crafting Experiences That Matter
          </span>
          <span
            className="w-px flex-1 bg-gray-200 block mx-auto"
            style={{ minHeight: "60%" }}
          ></span>
          <span
            className="text-xs text-gray-300 font-semibold select-none tracking-widest mt-2 mb-4"
            style={{
              writingMode: "vertical-rl",
              textOrientation: "mixed",
              letterSpacing: "0.2em",
            }}
          >
            2025
          </span>
        </div>

        <div className="w-full h-full flex flex-col justify-center lg:justify-between px-4 md:px-0 py-6 lg:py-0">
          {/* Stats Section */}
          <div className="flex justify-center gap-8 sm:gap-12 lg:gap-16 px-4 lg:px-8 py-3 lg:py-10 relative lg:top-30 w-full">
            <div className="flex flex-col items-start">
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-light text-gray-800 leading-snug">
                10+
              </span>
              <span className="text-xs sm:text-sm lg:text-md text-gray-500 font-medium tracking-wider uppercase mt-1 lg:mt-2">
                Projects
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-light text-gray-800 leading-snug">
                3+
              </span>
              <span className="text-xs sm:text-sm lg:text-md text-gray-500 font-medium tracking-wider uppercase mt-1 lg:mt-2">
                Hackathons won
              </span>
            </div>
          </div>

          {/* Hero Name and Tagline */}
          <div className="flex flex-col items-center justify-center relative lg:bottom-20 px-4 lg:px-8 py-4 lg:py-0">
            <h1 className="text-[1.8rem] sm:text-[2.2rem] md:text-[2.8rem] lg:text-[6rem] xl:text-[7rem] font-light text-gray-900 leading-[1.1] tracking-tight drop-shadow-md text-center">
              Hi, I'm Ansh
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 mt-2 lg:mt-6 flex items-center tracking-wide text-center">
              <span className="hidden sm:inline-block w-6 lg:w-8 h-px bg-gray-400 mr-3 lg:mr-4 align-middle"></span>
              Built different. Code included.
            </p>
          </div>

          {/* Scroll Down Indicator */}
          <div className="flex flex-col items-center mb-2 lg:mb-6">
            <span className="text-xs lg:text-base text-gray-600 tracking-wide uppercase">
              Scroll down
            </span>
            <span className="ml-2 text-lg lg:text-3xl animate-bounce-slow text-gray-800">
              ↓
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Left;

/* CSS Custom Animation - Place in index.css or global.css */
/*
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
  .animate-bounce-slow {
    animation: bounce-slow 1.5s infinite;
  }
  @keyframes bounce-slow {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(18px); }
  }
}
*/