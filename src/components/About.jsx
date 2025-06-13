import React from "react";
import meimg2 from "../assets/me2.jpg";
import meimg3 from "../assets/me3.jpg";
import { CheckCircle } from "lucide-react";

function About() {
  return (
    <div
      className="w-full h-auto lg:h-[70vh] flex flex-col lg:flex-row py-8 lg:py-15 px-4 lg:px-0 gap-8 lg:gap-0"
      style={{ background: "#f8f8f8" }}
      id="about"
    >
      {/* LEFT TEXT SECTION */}
      <div className="aboutme w-full lg:w-[40%] px-4 sm:px-8 lg:px-20 order-1 lg:order-1">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-black">
          About Me
        </h1>
        <p className="text-base sm:text-lg lg:text-xl mt-4 lg:mt-5 text-[#666] leading-relaxed">
          Hey, I'm Ansh — a developer who loves turning ideas into clean,
          functional, and unforgettable digital experiences. Whether it's
          building sleek web apps, crafting AI-powered tools, or just pushing
          pixels with purpose — I'm all about that sweet spot where creativity
          meets code. I've worked on everything from real-time vision systems to
          award-winning hackathon projects. This portfolio? Just a small window
          into the chaos I call creation.
        </p>
      </div>

      {/* MIDDLE CARD SECTION */}
      <div className="middle w-full sm:w-80 lg:w-[20%] mx-auto lg:mx-0 bg-white rounded-2xl h-auto lg:h-fit relative p-4 sm:p-6 lg:p-7 shadow-2xl hover:scale-105 transition-all duration-300 order-2 lg:order-2">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-black">
          10X
        </h1>
        <p className="text-sm sm:text-base lg:text-lg mt-2 text-[#666] whitespace-pre-line">
          Quicker from idea to code. Because shipping &gt; talking.
        </p>
        <img
          src={meimg2}
          alt="my image"
          className="rounded-xl mt-4 grayscale contrast-110 brightness-105 w-full h-auto"
        />
      </div>

      {/* RIGHT IMAGE BUTTON SECTION */}
      <div className="w-full lg:w-[40%] flex flex-col justify-center items-center relative px-4 sm:px-8 lg:px-0 order-3 lg:order-3">
        <div className="relative group cursor-pointer mb-6 lg:mb-0">
          <img
            src={meimg3}
            alt="Click image"
            className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 object-cover rounded-xl transition-all duration-300 group-hover:scale-105 shadow-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-white rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
              <span className="text-sm sm:text-lg lg:text-xl">↗</span>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[40%] flex flex-col justify-center gap-4 lg:gap-6 lg:pr-10 lg:mt-10">
          <div className="flex items-start gap-3 lg:gap-4">
            <CheckCircle className="text-black mt-1 w-5 h-5 lg:w-6 lg:h-6 flex-shrink-0" />
            <p className="text-sm sm:text-base lg:text-md text-gray-700 leading-relaxed">
              With 3+ years of self-driven experience, I focus on building
              real-world products powered by design thinking & user empathy.
            </p>
          </div>
          <div className="flex items-start gap-3 lg:gap-4">
            <CheckCircle className="text-black mt-1 w-5 h-5 lg:w-6 lg:h-6 flex-shrink-0" />
            <p className="text-sm sm:text-base lg:text-md text-gray-700 leading-relaxed">
              I specialize in end-to-end dev — frontend to infra — turning vague
              ideas into polished tools and platforms.
            </p>
          </div>
          <div className="flex items-start gap-3 lg:gap-4">
            <CheckCircle className="text-black mt-1 w-5 h-5 lg:w-6 lg:h-6 flex-shrink-0" />
            <p className="text-sm sm:text-base lg:text-md text-gray-700 leading-relaxed">
              I thrive in fast-paced spaces — hackathons, sprints, or solo
              weekends. Always shipping, always learning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
