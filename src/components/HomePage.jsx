import { useEffect, useState } from "react";
import Hero from "./Hero.jsx";
import About from "./About";
import WhatIDo from "./WhatIDo";
import Projects from "./Projects";
import AchievementsSection from "./AchievementsSection";
import LetsTalkFooter from "./LetsTalkFooter";
import LeftNav from "./LeftNav";
import "swiper/css";
import "swiper/css/free-mode";

const HomePage = () => {
    // No scroll effects, nav always visible, home always on top
    return (
        <div>
            <div className="sticky top-0 left-0 z-[150] w-full">
                <LeftNav visible={true} />
            </div>

            <div className="relative w-full">
                <Hero />
            </div>

            <div className="relative bg-[var(--color-tertiary)]">
                <div id="about">
                    <About />
                </div>
                <div id="whatido">
                    <WhatIDo />
                </div>
                <div id="projects">
                    <Projects />
                </div>
                <div id="achievements">
                    <AchievementsSection />
                </div>
                <div id="contact">
                    <LetsTalkFooter />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
