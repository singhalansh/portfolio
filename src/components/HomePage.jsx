import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "./Hero.jsx";
import About from "./About";
import WhatIDo from "./WhatIDo";
import Projects from "./Projects";
import AchievementsSection from "./AchievementsSection";
import LetsTalkFooter from "./LetsTalkFooter";
import LeftNav from "./LeftNav";
import "swiper/css";
import "swiper/css/free-mode";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
    const heroRef = useRef(null);
    const curtainContainerRef = useRef(null);
    const contentRef = useRef(null);
    const [contentHeight, setContentHeight] = useState(0);
    const [showLeftNav, setShowLeftNav] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024); // lg: 1024px
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        const calculateContentHeight = () => {
            if (contentRef.current) {
                const height = contentRef.current.offsetHeight;
                setContentHeight(height);
            }
        };

        calculateContentHeight();
        window.addEventListener("resize", calculateContentHeight);

        return () => {
            window.removeEventListener("resize", calculateContentHeight);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (heroRef.current) {
                const heroRect = heroRef.current.getBoundingClientRect();
                const heroBottom = heroRect.bottom + window.scrollY;
                setShowLeftNav(window.scrollY >= heroBottom);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        // Run once on mount in case user is not at top
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isMobile || !contentHeight) return;

        // Kill previous triggers to avoid duplicates
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

        ScrollTrigger.create({
            trigger: curtainContainerRef.current,
            start: "top top",
            end: `+=${contentHeight}`,
            scrub: 0.01,
            pin: true,
            anticipatePin: 1,
            onUpdate: (self) => {
                const progress = self.progress;
                gsap.set(heroRef.current, {
                    yPercent: -100 * progress,
                    ease: "none",
                });
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, [contentHeight, isMobile]);

    return (
        <div className="overflow-x-hidden lg:overflow-y-hidden">
            <div className="fixed top-0 left-0 z-[150] w-full">
                <LeftNav visible={showLeftNav} />
            </div>

            <div
                ref={curtainContainerRef}
                className={isMobile ? "relative z-[100]" : "relative z-[100]"}
                style={isMobile ? {} : { height: `${contentHeight}px` }}
            >
                {/* Hero - place at top for mobile */}
                {isMobile && (
                    <div
                        ref={heroRef}
                        className="relative w-full md:h-screen z-[200]"
                        style={{
                            position: "static",
                            top: "auto",
                            left: "auto",
                        }}
                    >
                        <Hero />
                    </div>
                )}
                {/* Content */}
                <div
                    ref={contentRef}
                    className={
                        isMobile
                            ? "relative w-full"
                            : "absolute top-0 w-full overflow-hidden"
                    }
                    style={
                        isMobile
                            ? { position: "static", top: "auto", left: "auto" }
                            : {}
                    }
                >
                    <div className="relative" id="about">
                        <About />
                    </div>
                    <div className="relative" id="whatido">
                        <WhatIDo />
                    </div>
                    <div className="relative" id="projects">
                        <Projects />
                    </div>
                    <div className="relative" id="achievements">
                        <AchievementsSection />
                    </div>
                    <div className="relative" id="contact">
                        <LetsTalkFooter />
                    </div>
                </div>
                {/* Hero for desktop (absolute overlay) */}
                {!isMobile && (
                    <div
                        ref={heroRef}
                        className="absolute top-0 left-0 w-full h-screen z-[200]"
                    >
                        <Hero />
                    </div>
                )}
            </div>
        </div>
    );
};

export default HomePage;
