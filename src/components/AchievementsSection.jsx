import React, { useEffect, useState, useRef, useCallback } from "react";
import {
    motion,
    useAnimation,
    useMotionValue,
    useTransform,
} from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import {
    Trophy,
    Medal,
    Star,
    Award,
    MapPin,
    Users,
    Zap,
    ChevronLeft,
    ChevronRight,
    Play,
    Pause,
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
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);
    const autoplayRef = useRef(null);

    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            dragFree: true,
            containScroll: "trimSnaps",
            slidesToScroll: 1,
            skipSnaps: false,
        },
        [
            Autoplay({ delay: 1000, stopOnInteraction: false }),
            WheelGesturesPlugin(),
        ]
    );

    // Mock images for demo - replace with your actual images

    const achievements = [
        {
            title: "LexHack",
            position: "Winner",
            type: "hackathon",
            location: "Delhi, India",
            participants: "30+ teams",
            image: lexhack,
            description: "on the podium in legal tech innovation hackathon",
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

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const scrollTo = useCallback(
        (index) => {
            if (emblaApi) emblaApi.scrollTo(index);
        },
        [emblaApi]
    );

    const toggleAutoplay = useCallback(() => {
        const autoplay = emblaApi?.plugins()?.autoplay;
        if (!autoplay) return;

        const playOrStop = autoplay.isPlaying() ? autoplay.stop : autoplay.play;
        playOrStop();
        setIsAutoPlaying(!autoplay.isPlaying());
    }, [emblaApi]);

    const onInit = useCallback((emblaApi) => {
        setScrollSnaps(emblaApi.scrollSnapList());
    }, []);

    const onSelect = useCallback((emblaApi) => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;

        onInit(emblaApi);
        onSelect(emblaApi);
        emblaApi.on("reInit", onInit);
        emblaApi.on("select", onSelect);
    }, [emblaApi, onInit, onSelect]);

    // Add hover handlers to pause/resume autoplay
    useEffect(() => {
        if (!emblaApi) return;
        const emblaNode = emblaRef.current;
        if (!emblaNode) return;
        const autoplay = emblaApi.plugins()?.autoplay;
        if (!autoplay) return;

        const handleMouseEnter = () => {
            autoplay.stop();
            setIsAutoPlaying(false);
        };
        const handleMouseLeave = () => {
            autoplay.play();
            setIsAutoPlaying(true);
        };
        emblaNode.addEventListener("mouseenter", handleMouseEnter);
        emblaNode.addEventListener("mouseleave", handleMouseLeave);
        return () => {
            emblaNode.removeEventListener("mouseenter", handleMouseEnter);
            emblaNode.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [emblaApi]);

    return (
        <section className="pb-12 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
            {/* Enhanced Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.4, 0.7, 0.4],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-3xl"
                    animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            </div>

            <div className=" mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Animated Header Section */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl mb-8 shadow-xl"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Trophy className="w-10 h-10 text-white" />
                    </motion.div>

                    <motion.h2
                        className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Achievements
                    </motion.h2>

                    <motion.div
                        className="flex items-center justify-center gap-2 mb-8"
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                        <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                        <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                    </motion.div>

                    <motion.p
                        className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        Excellence recognized across India's most prestigious
                        hackathons, competitions, and technical events
                    </motion.p>

                    {/* Animated Achievement Stats */}
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-5xl mx-auto"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        {[
                            {
                                icon: Trophy,
                                count: "3",
                                label: "First Places",
                                color: "from-yellow-400 to-orange-400",
                            },
                            {
                                icon: Medal,
                                count: "1",
                                label: "Runner Up",
                                color: "from-blue-400 to-indigo-400",
                            },
                            {
                                icon: Star,
                                count: "3",
                                label: "Top 10",
                                color: "from-emerald-400 to-teal-400",
                            },
                            {
                                icon: Award,
                                count: "20+",
                                label: "Participations",
                                color: "from-purple-400 to-pink-400",
                            },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
                                whileHover={{ scale: 1.05, y: -5 }}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.8 + index * 0.1,
                                }}
                            >
                                <motion.div
                                    className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mb-4 mx-auto`}
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <stat.icon className="w-7 h-7 text-white" />
                                </motion.div>
                                <motion.div
                                    className="text-4xl font-bold text-gray-900 mb-2"
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 1 + index * 0.1,
                                    }}
                                >
                                    {stat.count}
                                </motion.div>
                                <div className="text-gray-600 font-medium">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Enhanced Carousel */}
                <div className="relative w-full">
                    {/* Embla Carousel */}
                    <div
                        className="overflow-hidden w-full"
                        ref={emblaRef}
                        onMouseEnter={() => {
                            const autoplay = emblaApi?.plugins()?.autoplay;
                            if (autoplay && autoplay.isPlaying())
                                autoplay.stop();
                        }}
                        onMouseLeave={() => {
                            const autoplay = emblaApi?.plugins()?.autoplay;
                            if (autoplay && !autoplay.isPlaying())
                                autoplay.play();
                        }}
                    >
                        <div className="flex w-full min-h-[480px] md:min-h-[520px] xl:min-h-[600px] items-stretch mt-7">
                            {achievements.map((achievement, index) => {
                                const IconComponent = achievement.icon;
                                return (
                                    <div
                                        key={index}
                                        className="flex-[0_0_80vw] sm:flex-[0_0_60vw] md:flex-[0_0_40vw] lg:flex-[0_0_30vw] xl:flex-[0_0_25vw] max-w-[400px] min-w-[320px] h-[420px] md:h-[480px] xl:h-[540px] flex items-stretch pl-4 "
                                    >
                                        <motion.div
                                            className="relative bg-white/70 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/20 mx-2 flex flex-col h-full group"
                                            whileHover={{ scale: 1.05, y: -10 }}
                                            initial={{ opacity: 0, y: 50 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{
                                                duration: 0.2,
                                                delay: index * 0.1,
                                            }}
                                        >
                                            {/* Image Section */}
                                            <div className="relative h-48 md:h-56 xl:h-64 overflow-hidden">
                                                <motion.img
                                                    src={achievement.image}
                                                    alt={achievement.title}
                                                    className="w-full h-full object-cover"
                                                    whileHover={{ scale: 1.1 }}
                                                    transition={{
                                                        duration: 0.5,
                                                    }}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

                                                {/* Rank Badge */}
                                                <motion.div
                                                    className="absolute top-4 right-4"
                                                    initial={{
                                                        opacity: 0,
                                                        scale: 0,
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        scale: 1,
                                                    }}
                                                    transition={{
                                                        duration: 0.3,
                                                        delay:
                                                            0.5 + index * 0.1,
                                                    }}
                                                >
                                                    <div
                                                        className={`inline-flex items-center px-4 py-2 rounded-2xl text-sm font-bold bg-gradient-to-r ${achievement.color} text-white shadow-lg`}
                                                    >
                                                        <IconComponent className="w-4 h-4 mr-2" />
                                                        {achievement.rank}
                                                    </div>
                                                </motion.div>

                                                {/* Type Badge */}
                                                <motion.div
                                                    className="absolute top-4 left-4"
                                                    initial={{
                                                        opacity: 0,
                                                        x: -20,
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        x: 0,
                                                    }}
                                                    transition={{
                                                        duration: 0.3,
                                                        delay:
                                                            0.3 + index * 0.1,
                                                    }}
                                                >
                                                    <div className="inline-flex items-center px-3 py-1 rounded-xl text-xs font-semibold bg-white/90 text-gray-800 backdrop-blur-sm">
                                                        {achievement.type.toUpperCase()}
                                                    </div>
                                                </motion.div>
                                            </div>

                                            {/* Content Section */}
                                            <div className="p-6 flex-1 flex flex-col justify-between relative z-10">
                                                <motion.h3
                                                    className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300"
                                                    initial={{
                                                        opacity: 0,
                                                        y: 20,
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        y: 0,
                                                    }}
                                                    transition={{
                                                        duration: 0.3,
                                                        delay:
                                                            0.6 + index * 0.1,
                                                    }}
                                                >
                                                    {achievement.title}
                                                </motion.h3>

                                                <motion.p
                                                    className="text-gray-600 mb-4 leading-relaxed text-sm"
                                                    initial={{
                                                        opacity: 0,
                                                        y: 20,
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        y: 0,
                                                    }}
                                                    transition={{
                                                        duration: 0.3,
                                                        delay:
                                                            0.7 + index * 0.1,
                                                    }}
                                                >
                                                    {achievement.description}
                                                </motion.p>

                                                {/* Event Details */}
                                                <motion.div
                                                    className="space-y-2 mb-4"
                                                    initial={{
                                                        opacity: 0,
                                                        y: 20,
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        y: 0,
                                                    }}
                                                    transition={{
                                                        duration: 0.3,
                                                        delay:
                                                            0.8 + index * 0.1,
                                                    }}
                                                >
                                                    <div className="flex items-center text-gray-600 text-sm">
                                                        <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                                                        <span className="font-medium">
                                                            {
                                                                achievement.location
                                                            }
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center text-gray-600 text-sm">
                                                        <Users className="w-4 h-4 mr-2 text-blue-600" />
                                                        <span className="font-medium">
                                                            {
                                                                achievement.participants
                                                            }
                                                        </span>
                                                    </div>
                                                </motion.div>

                                                {/* Tags */}
                                                <motion.div
                                                    className="flex flex-wrap gap-2"
                                                    initial={{
                                                        opacity: 0,
                                                        y: 20,
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        y: 0,
                                                    }}
                                                    transition={{
                                                        duration: 0.3,
                                                        delay:
                                                            0.9 + index * 0.1,
                                                    }}
                                                >
                                                    {achievement.tags.map(
                                                        (tag, tagIndex) => (
                                                            <motion.span
                                                                key={tagIndex}
                                                                className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition-colors"
                                                                whileHover={{
                                                                    scale: 1.05,
                                                                }}
                                                            >
                                                                {tag}
                                                            </motion.span>
                                                        )
                                                    )}
                                                </motion.div>
                                            </div>

                                            {/* Animated Hover Border Effect */}
                                            <motion.div
                                                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
                                                whileHover={{ opacity: 1 }}
                                            >
                                                <div
                                                    className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${achievement.color} opacity-10`}
                                                ></div>
                                            </motion.div>
                                        </motion.div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AchievementsSection;
