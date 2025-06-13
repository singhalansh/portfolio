import React from "react";
import meimg2 from "../assets/me2.jpg";
import meimg3 from "../assets/me3.jpg";
import { CheckCircle } from "lucide-react";

function About() {
  return (
    <div
      className="w-full h-[70vh] flex py-15"
      style={{ background: "#f8f8f8" }}
      id="about"
    >
      {/* LEFT TEXT SECTION */}
      <div className="aboutme w-[40%] px-20">
        <h1 className="text-4xl font-semibold text-black">About Me</h1>
        <p className="text-xl mt-5 text-[#666] leading-relaxed">
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
      <div className="middle w-[20%] bg-white rounded-2xl h-full relative p-7  shadow-2xl hover:scale-105 transition-all duration-300">
        <h1 className="text-4xl font-semibold text-black">10X</h1>
        <p className="text-lg mt-2 text-[#666] whitespace-pre-line">
          Quicker from idea to code. Because shipping &gt; talking.
        </p>
        <img
          src={meimg2}
          alt="my image"
          className="rounded-xl mt-4 grayscale contrast-110 brightness-105"
        />
      </div>

      {/* RIGHT IMAGE BUTTON SECTION */}
      <div className="w-[40%] flex flex-col justify-center items-center relative">
        <div className="relative group cursor-pointer">
          <img
            src={meimg3}
            alt="Click image"
            className="w-40 h-40 object-cover rounded-xl transition-all duration-300 group-hover:scale-105 shadow-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
              <span className="text-xl">↗</span>
            </div>
          </div>
        </div>

        <div className="w-[40%] flex flex-col justify-center gap-6 pr-10 mt-10">
          <div className="flex items-start gap-4">
            <CheckCircle className="text-black mt-1 w-30" />
            <p className="text-md text-gray-700 leading-relaxed">
              With 3+ years of self-driven experience, I focus on building
              real-world products powered by design thinking & user empathy.
            </p>
          </div>
          <div className="flex items-start gap-4">
            <CheckCircle className="text-black mt-1 w-30" />
            <p className="text-md text-gray-700 leading-relaxed">
              I specialize in end-to-end dev — frontend to infra — turning vague
              ideas into polished tools and platforms.
            </p>
          </div>
          <div className="flex items-start gap-4">
            <CheckCircle className="text-black mt-1 w-30" />
            <p className="text-md text-gray-700 leading-relaxed">
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
