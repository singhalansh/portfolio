import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
const skills = [
    {
        title: "Real-Time Computer Vision",
        link: "https://www.shutterstock.com/image-vector/modern-technology-icon-computer-vision-600nw-2270423625.jpg",
    },
    {
        title: "Full Stack Development",
        link: "https://markovate.com/wp-content/uploads/2022/08/top-MERN-Stack.webp",
    },
    {
        title: "Agentic & Generative AI",
        link: "https://www.nextrow.com/wp-content/uploads/2025/06/Agentic-AI-Cover-scaled-1170x700.png",
    },
    {
        title: "Deep Learning",
        link: "https://my.mouser.com/blog/Portals/11/Dongang_Machine%20Learning_Theme%20Image-min_1.jpg",
    },
    {
        title: "DSA & Problem Solving (750+ LC)",
        link: "https://media.licdn.com/dms/image/v2/C4E1BAQGauK73E2uUUA/company-background_10000/company-background_10000/0/1584075418610?e=2147483647&v=beta&t=LXbbj21jqBo8tggiz7YXIX7mZi0eslgE2Pj_Ev7AS6g",
    },
];

export default function WhatIDo() {
    const swiperRef = useRef(null);

    const handleMouseEnter = () => {
        // Do nothing - let autoplay continue
    };

    const handleMouseLeave = () => {
        // Ensure autoplay is still running
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.autoplay.start();
        }
    };

    const handleInteraction = () => {
        // Restart autoplay after any interaction
        setTimeout(() => {
            if (swiperRef.current && swiperRef.current.swiper) {
                swiperRef.current.swiper.autoplay.start();
            }
        }, 100);
    };

    return (
        <section className="min-h-[60vh] py-16 px-6 bg-[#f8f8f8]" id="services">
            <h1 className="text-4xl  text-gray-800 text-center mb-8">
                What I Do
            </h1>
            <p className="text-center text-gray-500 text-lg mb-10 max-w-2xl mx-auto">
                From full-stack engineering to deploying AI-driven solutions — I
                bring ideas to life with design, logic, and strategy.
            </p>

            <div className="relative overflow-hidden">
                <Swiper
                    ref={swiperRef}
                    modules={[FreeMode, Mousewheel, Autoplay]}
                    loop={true}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false,
                        stopOnLastSlide: false,
                        waitForTransition: false,
                        reverseDirection: false,
                    }}
                    freeMode={{
                        enabled: true,
                        momentum: true,
                        sticky: false,
                        minimumVelocity: 0.02,
                        momentumBounce: false,
                        momentumVelocityRatio: 0.8,
                    }}
                    mousewheel={{
                        forceToAxis: true,
                        sensitivity: 2,
                        releaseOnEdges: true, // Allow page scroll when reaching carousel edges
                        thresholdDelta: 50,
                        thresholdTime: 200,
                        eventsTarget: "container", // Only capture wheel when over the swiper
                    }}
                    slidesPerView="auto"
                    spaceBetween={24}
                    speed={2000}
                    allowTouchMove={true}
                    grabCursor={true}
                    resistanceRatio={0}
                    watchSlidesProgress={true}
                    onTouchStart={handleInteraction}
                    onTouchEnd={handleInteraction}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onSliderMove={handleInteraction}
                    className="!py-6 !px-4"
                    breakpoints={{
                        640: {
                            spaceBetween: 32,
                        },
                    }}
                >
                    {/* Create multiple sets for smoother infinite loop */}
                    {[...Array(3)].map((_, setIndex) =>
                        skills.map(({ title, link }, index) => (
                            <SwiperSlide
                                key={`${setIndex}-${index}`}
                                className="!w-auto !flex-shrink-0"
                            >
                                <div className="w-[360px] group cursor-pointer mb-5">
                                    <div className="relative overflow-hidden rounded-2xl shadow-lg bg-[#f8f8f8] transform transition-all duration-300 group-hover:shadow-xl group-hover:scale-105">
                                        <div className="relative h-[260px] overflow-hidden">
                                            <img
                                                src={link}
                                                alt={title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                loading="lazy"
                                                onLoad={(e) => {
                                                    e.target.style.opacity =
                                                        "1";
                                                }}
                                                style={{
                                                    opacity: 0,
                                                    transition:
                                                        "opacity 0.3s ease-in-out",
                                                }}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-lg font-semibold text-gray-800 leading-tight">
                                                {title}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )),
                    )}
                </Swiper>
            </div>

            {/* Optional: Add a subtle gradient overlay to fade edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
        </section>
    );
}
