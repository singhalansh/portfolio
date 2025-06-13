import React, { useEffect, useState } from "react";
import { useRef } from "react";
import {
    Trophy,
    Medal,
    Star,
    Award,
    Calendar,
    MapPin,
    Users,
    ChevronRight,
    Zap,
} from "lucide-react";
import {
    tech_arena,
    project_showcase,
    opencv,
    navigateai,
    me3,
    me2,
    me,
    lexhack,
    lawyerup,
    ideathon,
    hack2hustle,
    galactyc_escape,
    code_nakshatra,
    bits,
    geekspeak,
} from "../assets";

const AchievementsSection = () => {
    const [isPaused, setIsPaused] = useState(false);
    const carouselRef = useRef(null);
    const achievements = [
        {
            title: "LexHack",
            position: "Winner",
            type: "hackathon",
            location: "Delhi, India",
            participants: "30+ teams",
            image: lexhack,
            description: "Champion in legal tech innovation hackathon",
            tags: ["Legal Tech", "AI/ML", "Innovation"],
            color: "from-yellow-400 to-orange-400",
            icon: Trophy,
            rank: "",
        },
        {
            title: "Tech Arena",
            position: "Winner",
            type: "Hackathon",
            location: "Delhi, India",
            participants: "200+ teams",
            image: tech_arena,
            description: "First place in technical competition",
            tags: ["Web Dev", "Problem Solving", "Innovation"],
            color: "from-emerald-400 to-teal-400",
            icon: Trophy,
            rank: "1st",
        },
        {
            title: "Project Showcase",
            position: "Winner",
            type: "showcase",
            location: "Delhi, India",
            participants: "200+ projects",
            image: project_showcase,
            description: "Best project in university showcase event",
            tags: ["Full Stack", "Design", "Innovation"],
            color: "from-purple-400 to-pink-400",
            icon: Trophy,
            rank: "1st",
        },
        {
            title: "Algorance",
            position: "Runner Up",
            type: "programming",
            location: "Delhi, India",
            participants: "800+ coders",
            image: "https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/banner/6795ac57d105e_algorance.webp?d=1920x557",
            description: "Second place in algorithmic programming",
            tags: ["Algorithms", "DSA", "Competitive Programming"],
            color: "from-blue-400 to-indigo-400",
            icon: Medal,
            rank: "2nd",
        },
        {
            title: "BITS Hackathon",
            position: "Top 5",
            type: "hackathon",
            location: "Pilani, India",
            participants: "100+ teams",
            image: bits,
            description: "Top 5 finish in prestigious hackathon",
            tags: ["Blockchain", "Web3", "Innovation"],
            color: "from-cyan-400 to-blue-400",
            icon: Star,
            rank: "4th",
        },
        {
            title: "Code Nakshatra",
            position: "Top 10",
            type: "Hackathon",
            location: "Delhi, India",
            participants: "600+ participants",
            image: code_nakshatra,
            description: "Top 10 finish in Hackathon",
            tags: ["Data Structures", "Algorithms", "Problem Solving"],
            color: "from-violet-400 to-purple-400",
            icon: Award,
            rank: "5th",
        },
        {
            title: "Hack2Hustle",
            position: "Top 10",
            type: "hackathon",
            location: "Gurgaon, India",
            participants: "75+ teams",
            image: hack2hustle,
            description: "Top 10 in startup-focused hackathon",
            tags: ["Startup", "MVP", "Entrepreneurship"],
            color: "from-rose-400 to-pink-400",
            icon: Zap,
            rank: "4th",
        },
        {
            title: "GeekSpeak by GFG",
            position: "Tech Co-Head & Speaker",
            type: "event",
            location: "Noida, India",
            participants: "100+ attendees",
            image: geekspeak, // Add this image in your public/images folder
            description:
                "led GeekSpeak under GeeksforGeeks with a public talk on problem solving and data structures, and led a team of 20+ members to organize the event.",
            tags: ["Leadership", "Public Speaking", "AI Projects"],
            color: "from-lime-400 to-cyan-400",
            icon: Users,
            rank: "Speaker + Lead",
        },
    ];

    const duplicatedAchievements = [...achievements, ...achievements];

    return (
        // You'll need to add this at the top of your component:
        // const carouselRef = useRef(null);

        <section className="py-24 bg-[var(--color-tertiary)] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden ">
                <div className="absolute top-20 right-10 w-72 h-72 bg-[var(--color-secondary)]/10 rounded-full blur-3xl animate-pulse border-[var(--color-primary)]/10 "></div>
                <div className="absolute bottom-20 left-10 w-96 h-96 bg-[var(--color-secondary)]/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[var(--color-secondary)]/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-[var(--color-primary)] rounded-3xl mb-8 shadow-xl">
                        <Trophy className="w-10 h-10 text-[var(--color-white)]" />
                    </div>

                    <h2 className="text-6xl md:text-7xl font-bold text-[var(--color-primary)] mb-6">
                        Achievements
                    </h2>

                    <div className="flex items-center justify-center gap-2 mb-8">
                        <div className="w-12 h-1 bg-[var(--color-primary)] rounded-full"></div>
                        <div className="w-3 h-3 bg-[var(--color-primary)] rounded-full"></div>
                        <div className="w-12 h-1 bg-[var(--color-primary)] rounded-full"></div>
                    </div>

                    <p className="text-xl text-[var(--color-secondary)] max-w-3xl mx-auto leading-relaxed font-medium">
                        Excellence recognized across India's most prestigious
                        hackathons, competitions, and technical events
                    </p>

                    {/* Achievement Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-5xl mx-auto">
                        <div className="bg-[var(--color-white)] rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-[var(--color-tertiary)]">
                            <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                                <Trophy className="w-7 h-7 text-[var(--color-white)]" />
                            </div>
                            <div className="text-4xl font-bold text-[var(--color-primary)] mb-2">
                                3
                            </div>
                            <div className="text-[var(--color-secondary)] font-medium">
                                First Places
                            </div>
                        </div>
                        <div className="bg-[var(--color-white)] rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-[var(--color-tertiary)]">
                            <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                                <Medal className="w-7 h-7 text-[var(--color-white)]" />
                            </div>
                            <div className="text-4xl font-bold text-[var(--color-primary)] mb-2">
                                1
                            </div>
                            <div className="text-[var(--color-secondary)] font-medium">
                                Runner Up
                            </div>
                        </div>
                        <div className="bg-[var(--color-white)] rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-[var(--color-tertiary)]">
                            <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                                <Star className="w-7 h-7 text-[var(--color-white)]" />
                            </div>
                            <div className="text-4xl font-bold text-[var(--color-primary)] mb-2">
                                3
                            </div>
                            <div className="text-[var(--color-secondary)] font-medium">
                                Top 10
                            </div>
                        </div>
                        <div className="bg-[var(--color-white)] rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-[var(--color-tertiary)]">
                            <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                                <Award className="w-7 h-7 text-[var(--color-white)]" />
                            </div>
                            <div className="text-4xl font-bold text-[var(--color-primary)] mb-2">
                                4k+
                            </div>
                            <div className="text-[var(--color-secondary)] font-medium">
                                Participants
                            </div>
                        </div>
                    </div>
                </div>

                {/* Infinite Scroll Carousel */}
                <div className="relative">
                    <div
                        ref={carouselRef}
                        className="flex gap-8 w-fit p-10 "
                        onMouseEnter={() => {
                            if (carouselRef.current) {
                                const element = carouselRef.current;
                                const computedStyle =
                                    window.getComputedStyle(element);
                                const transform = computedStyle.transform;

                                if (transform !== "none") {
                                    // Extract translateX value from transform matrix
                                    const matrix =
                                        transform.match(/matrix.*\((.+)\)/);
                                    if (matrix) {
                                        const values = matrix[1].split(", ");
                                        const translateX =
                                            parseFloat(values[4]) || 0;
                                        element.style.transform = `translateX(${translateX}px)`;
                                    }
                                }
                                element.style.animationPlayState = "paused";
                                setIsPaused(true);
                            }
                        }}
                        onMouseLeave={() => {
                            if (carouselRef.current) {
                                carouselRef.current.style.animationPlayState =
                                    "running";
                                setIsPaused(false);
                            }
                        }}
                        style={{
                            animation: "scroll 40s linear infinite",
                        }}
                    >
                        {duplicatedAchievements.map((achievement, index) => {
                            const IconComponent = achievement.icon;
                            return (
                                <div
                                    key={index}
                                    className="flex-shrink-0 w-96 group"
                                >
                                    <div className="relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-purple-200 group-hover:scale-105 transform">
                                        {/* Image Section */}
                                        <div className="relative h-48 overflow-hidden">
                                            <img
                                                src={achievement.image}
                                                alt={achievement.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent"></div>

                                            {/* Rank Badge */}
                                            <div className="absolute top-4 right-4">
                                                <div
                                                    className={`inline-flex items-center px-4 py-2 rounded-2xl text-sm font-bold bg-gradient-to-r ${achievement.color} text-white shadow-lg`}
                                                >
                                                    <IconComponent className="w-4 h-4 mr-2" />
                                                    {achievement.rank}
                                                </div>
                                            </div>

                                            {/* Type Badge */}
                                            <div className="absolute top-4 left-4">
                                                <div className="inline-flex items-center px-3 py-1 rounded-xl text-xs font-semibold bg-white/90 text-gray-800 backdrop-blur-sm">
                                                    {achievement.type.toUpperCase()}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content Section */}
                                        <div className="p-8 relative z-10">
                                            <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-3 group-hover:text-[var(--color-secondary)] transition-colors duration-300">
                                                {achievement.title}
                                            </h3>

                                            <p className="text-[var(--color-secondary)] mb-6 leading-relaxed">
                                                {achievement.description}
                                            </p>

                                            {/* Event Details */}
                                            <div className="space-y-3 mb-6">
                                                <div className="flex items-center text-[var(--color-secondary)]">
                                                    <MapPin className="w-4 h-4 mr-3 text-[var(--color-primary)]" />
                                                    <span className="font-medium">
                                                        {achievement.location}
                                                    </span>
                                                </div>
                                                <div className="flex items-center text-[var(--color-secondary)]">
                                                    <Users className="w-4 h-4 mr-3 text-[var(--color-primary)]" />
                                                    <span className="font-medium">
                                                        {
                                                            achievement.participants
                                                        }
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-2">
                                                {achievement.tags.map(
                                                    (tag, tagIndex) => (
                                                        <span
                                                            key={tagIndex}
                                                            className="px-3 py-1 text-sm font-medium rounded-xl bg-[var(--color-tertiary)] text-[var(--color-primary)] border border-[var(--color-tertiary)] hover:border-[var(--color-secondary)] transition-colors"
                                                        >
                                                            {tag}
                                                        </span>
                                                    )
                                                )}
                                            </div>
                                        </div>

                                        {/* Subtle Hover Border Effect */}
                                        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                            <div
                                                className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${achievement.color} opacity-10`}
                                            ></div>
                                            <div
                                                className={`absolute inset-0 rounded-3xl border-2 bg-gradient-to-r ${achievement.color}`}
                                                style={{
                                                    background: `linear-gradient(45deg, transparent, transparent), linear-gradient(45deg, var(--color-primary), var(--color-secondary))`,
                                                    WebkitMask: `linear-gradient(white 0 0) content-box, linear-gradient(white 0 0)`,
                                                    WebkitMaskComposite: "xor",
                                                    maskComposite: "exclude",
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Animation Styles */}
            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>
        </section>
    );
};

export default AchievementsSection;

// Example usage of the new color palette in AchievementsSection
// Replace hardcoded colors with CSS variables or Tailwind classes
// For inline styles:
// style={{ backgroundColor: 'var(--color-tertiary)', color: 'var(--color-primary)' }}
// For Tailwind, use the closest matching classes or update tailwind.config.js

// Example (JSX):
// <div className="p-6 rounded-xl shadow" style={{ backgroundColor: 'var(--color-tertiary)', color: 'var(--color-primary)' }}>
//   ...
// </div>
