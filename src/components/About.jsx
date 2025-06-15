import React from "react";
import meimg2 from "../assets/me2.jpg";
import meimg3 from "../assets/me3.jpg";
import { CheckCircle } from "lucide-react";

function About() {
  return (
    <div
      className="w-full min-h-screen lg:min-h-[70vh] flex flex-col lg:flex-row py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 gap-12 lg:gap-0"
      style={{ background: "#f8f8f8" }}
      id="about"
    >
      {/* LEFT TEXT SECTION */}
      <div className="aboutme w-full lg:w-[40%] px-4 sm:px-8 lg:px-16 xl:px-20 order-1">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black">
          About Me
        </h1>
        <p className="text-base sm:text-lg lg:text-xl mt-6 text-[#666] leading-relaxed">
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
      <div className="middle w-full sm:w-80 lg:w-[20%] mx-auto lg:mx-0 bg-white rounded-2xl h-fit relative p-6 sm:p-7 lg:p-8 shadow-2xl hover:scale-105 transition-all duration-300 order-2">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black">
          10X
        </h1>
        <p className="text-sm sm:text-base lg:text-lg mt-3 text-[#666] whitespace-pre-line">
          Quicker from idea to code. Because shipping &gt; talking.
        </p>
        <img
          src={meimg2}
          alt="my image"
          className="rounded-xl mt-6 grayscale contrast-110 brightness-105 w-full h-auto"
        />
      </div>

      {/* RIGHT IMAGE BUTTON SECTION */}
      <div className="w-full lg:w-[40%] flex flex-col justify-center items-center gap-12 lg:gap-16 px-4 sm:px-8 lg:px-16 order-3">
        <div className="relative group cursor-pointer">
          <img
            src={meimg3}
            alt="Click image"
            className="w-36 h-36 sm:w-40 sm:h-40 lg:w-44 lg:h-44 object-cover rounded-xl transition-all duration-300 group-hover:scale-105 shadow-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
              <span className="text-lg sm:text-xl">↗</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:gap-8">
          <div className="flex items-start gap-4">
            <CheckCircle className="text-black mt-1 w-6 h-6 flex-shrink-0" />
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
              With 3+ years of self-driven experience, I focus on building
              real-world products powered by design thinking & user empathy.
            </p>
          </div>
          <div className="flex items-start gap-4">
            <CheckCircle className="text-black mt-1 w-6 h-6 flex-shrink-0" />
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
              I specialize in end-to-end dev — frontend to infra — turning vague
              ideas into polished tools and platforms.
            </p>
          </div>
          <div className="flex items-start gap-4">
            <CheckCircle className="text-black mt-1 w-6 h-6 flex-shrink-0" />
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
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
