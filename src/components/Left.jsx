import React from "react";
import LeftNav from "./LeftNav";

function Left() {
  return (
    <div
      className="w-[50%] h-screen flex flex-col"
      style={{ background: "#f8f8f8" }}
    >
      <LeftNav />

      <div className="flex flex-grow w-full overflow-hidden">
        {/* Sidebar */}
        <div className="w-[10%] h-full flex flex-col items-center justify-between py-0 relative pl-8">
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

        <div className="w-full h-full flex flex-col justify-between">
          {/* Stats Section */}
          <div className="flex justify-center gap-16 px-8 py-10 relative top-30 w-full">
            <div className="flex flex-col items-start">
              <span className="text-3xl md:text-5xl font-light text-gray-800 leading-snug">
                10+
              </span>
              <span className="text-md text-gray-500 font-medium tracking-wider uppercase mt-2">
                Projects
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-5xl font-light text-gray-800 leading-snug">
                3+
              </span>
              <span className="text-md text-gray-500 font-medium tracking-wider uppercase mt-2">
                Hackathons won
              </span>
            </div>
          </div>

          {/* Hero Name and Tagline */}
          <div className="flex flex-col items-center justify-center relative bottom-20 flex-1 px-8">
            <h1 className="text-[4rem] md:text-[6rem] lg:text-[7rem] font-light text-gray-900 leading-[1.1] tracking-tight drop-shadow-md">
              Hi, I’m Ansh
            </h1>
            <p className="text-base md:text-lg text-gray-700 mt-6 flex items-center tracking-wide">
              <span className="inline-block w-8 h-px bg-gray-400 mr-4 align-middle"></span>
              Built different. Code included.
            </p>
          </div>

          {/* Scroll Down Indicator */}
          <div className="flex flex-col items-center mb-6">
            <span className="text-base text-gray-600 tracking-wide uppercase">
              Scroll down
            </span>
            <span className="ml-2 text-3xl animate-bounce-slow text-gray-800">
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
