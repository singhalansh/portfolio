import React, { useState } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

function LeftNav({ visible = false }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (id) => {
        gsap.to(window, {
            duration: 0.5,
            scrollTo: `#${id}`,
            ease: "none",
        });
        setIsMenuOpen(false);
    };
    console.log(visible)
    return (
        <nav
            className={`!fixed w-full px-4 sm:px-6 lg:px-8 py-2 lg:pl-60 ${
                visible ? "flex" : "hidden"
            } items-center justify-between  transition-all duration-500 bg-[var(--color-tertiary)]/40 backdrop-blur-lg`}
            style={{
                backgroundColor: "rgba(248,248,248, 0.25)", // fallback to a more translucent purple
                backdropFilter: "blur(12px)",
            }}
        >
            {/* Desktop Navigation */}
            <ul className="hidden lg:flex gap-6 xl:gap-10 text-[var(--color-primary)] font-medium text-base xl:text-lg w-full">
                <li>
                    <button
                        onClick={() => scrollToSection("about")}
                        className="hover:text-black transition-colors"
                    >
                        About Me
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => scrollToSection("portfolio")}
                        className="hover:text-black transition-colors"
                    >
                        Portfolio
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => scrollToSection("services")}
                        className="hover:text-black transition-colors"
                    >
                        Services
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => scrollToSection("achievements")}
                        className="hover:text-black transition-colors"
                    >
                        Achievements
                    </button>
                </li>
                <li className="ml-auto">
                    <button
                        onClick={() => scrollToSection("contact")}
                        className="relative px-4 py-2 rounded-full border-2 border-[var(--color-primary)] font-semibold overflow-hidden group transition-colors duration-300 hover:text-white"
                    >
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                            Let's Talk!
                        </span>
                        <span className="absolute inset-0 bg-[var(--color-primary)] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                    </button>
                </li>
            </ul>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden absolute top-full left-0 right-0 bg-[var(--color-primary)]/80 border-t border-gray-200 transition-all duration-300 ${
                    isMenuOpen
                        ? "opacity-100 visible transform translate-y-0"
                        : "opacity-0 invisible transform -translate-y-4"
                } backdrop-blur-md`}
                style={{ zIndex: 40 }}
            >
                <ul className="flex flex-col p-4 space-y-4 text-[var(--color-primary)]">
                    <li>
                        <button
                            onClick={() => scrollToSection("about")}
                            className="block py-2 font-medium text-base hover:text-black transition-colors"
                        >
                            About Me
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => scrollToSection("portfolio")}
                            className="block py-2 font-medium text-base hover:text-black transition-colors"
                        >
                            Portfolio
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => scrollToSection("services")}
                            className="block py-2 font-medium text-base hover:text-black transition-colors"
                        >
                            Services
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => scrollToSection("achievements")}
                            className="block py-2 font-medium text-base hover:text-black transition-colors"
                        >
                            Achievements
                        </button>
                    </li>
                    <li className="flex justify-end">
                        <button
                            onClick={() => scrollToSection("contact")}
                            className="block py-2 font-medium text-base rounded-full border-2 border-[var(--color-primary)] relative overflow-hidden group transition-colors duration-300 hover:text-white"
                        >
                            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                                Let's Talk!
                            </span>
                            <span className="absolute inset-0 bg-[var(--color-primary)] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default LeftNav;
