import React, { useEffect, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
    ArrowLeft,
    ExternalLink,
    Github,
    Calendar,
    Tag,
    Layers,
    CheckCircle,
    AlertTriangle,
    ChevronRight,
    Code,
    Zap,
} from "lucide-react";
import { getProjectBySlug, projects } from "../data/projects";

// Animated section component
const AnimatedSection = ({ children, delay = 0, className = "" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

// Feature card component
const FeatureCard = ({ feature, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -2 }}
            className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
        >
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#222222] to-[#444444] flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-white" />
            </div>
            <span className="text-[#222222] font-medium">{feature}</span>
        </motion.div>
    );
};

// Tech stack pill component
const TechPill = ({ tech, index }) => {
    return (
        <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="px-4 py-2 bg-gradient-to-r from-[#222222] to-[#333333] text-white text-sm font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300 cursor-default"
        >
            {tech}
        </motion.span>
    );
};

// Challenge card component
const ChallengeCard = ({ challenge, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="flex items-start gap-4 p-5 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-100"
        >
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-white" />
            </div>
            <div>
                <span className="text-[#222222] font-medium leading-relaxed">
                    {challenge}
                </span>
            </div>
        </motion.div>
    );
};

// Related project card
const RelatedProjectCard = ({ project }) => {
    return (
        <Link to={`/${project.slug}`}>
            <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.2 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
                <div className="relative h-32 overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-4">
                    <h4 className="font-bold text-[#222222] group-hover:text-[#7B7B7B] transition-colors line-clamp-1">
                        {project.title}
                    </h4>
                    <p className="text-sm text-[#7B7B7B] mt-1 line-clamp-2">
                        {project.description}
                    </p>
                </div>
            </motion.div>
        </Link>
    );
};

export default function ProjectDetail() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const project = getProjectBySlug(slug);
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
    const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!project) {
        return (
            <div className="min-h-screen bg-[#F8F8F8] flex items-center justify-center font-poppins">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center"
                >
                    <h1 className="text-4xl font-bold text-[#222222] mb-4">
                        Project Not Found
                    </h1>
                    <p className="text-[#7B7B7B] mb-8">
                        The project you're looking for doesn't exist.
                    </p>
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#222222] text-white rounded-full hover:bg-[#333333] transition-all duration-300"
                    >
                        <ArrowLeft size={18} />
                        Back to Home
                    </Link>
                </motion.div>
            </div>
        );
    }

    // Get related projects (same category, excluding current)
    const relatedProjects = projects
        .filter(
            (p) =>
                p.id !== project.id &&
                p.categories?.some((cat) => project.categories?.includes(cat)),
        )
        .slice(0, 3);

    return (
        <div
            ref={containerRef}
            className="min-h-screen bg-[#F8F8F8] font-poppins"
        >
            {/* Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#222222] to-[#7B7B7B] origin-left z-50"
                style={{ scaleX: scrollYProgress }}
            />

            {/* Fixed Back Button */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="fixed top-6 left-6 z-40"
            >
                <button
                    onClick={() => navigate("/#projects")}
                    className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 text-[#222222] font-medium"
                >
                    <ArrowLeft size={18} />
                    <span className="hidden sm:inline">Back</span>
                </button>
            </motion.div>

            {/* Hero Section with Parallax */}
            <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
                <motion.div
                    style={{ y: imageY, scale: imageScale }}
                    className="absolute inset-0"
                >
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#F8F8F8] via-black/40 to-transparent" />

                {/* Hero Content */}
                <motion.div
                    style={{ opacity: headerOpacity }}
                    className="absolute bottom-0 left-0 right-0 p-8 md:p-16"
                >
                    <div className="max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="flex flex-wrap gap-2 mb-4"
                        >
                            {project.categories?.map((category, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full"
                                >
                                    {category}
                                </span>
                            ))}
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg"
                        >
                            {project.title}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="text-lg md:text-xl text-white/90 max-w-3xl drop-shadow"
                        >
                            {project.description}
                        </motion.p>
                    </div>
                </motion.div>
            </div>

            {/* Main Content */}
            <div className="relative bg-[#F8F8F8]">
                <div className="max-w-5xl mx-auto px-6 md:px-8 py-12 md:py-20">
                    {/* Quick Info Cards */}
                    <AnimatedSection className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16 -mt-24 relative z-10">
                        {project.year && (
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <Calendar className="w-5 h-5 text-[#7B7B7B]" />
                                    <span className="text-sm text-[#7B7B7B]">
                                        Year
                                    </span>
                                </div>
                                <p className="text-2xl font-bold text-[#222222]">
                                    {project.year}
                                </p>
                            </motion.div>
                        )}

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <Layers className="w-5 h-5 text-[#7B7B7B]" />
                                <span className="text-sm text-[#7B7B7B]">
                                    Category
                                </span>
                            </div>
                            <p className="text-lg font-bold text-[#222222]">
                                {project.categories?.join(", ")}
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <Code className="w-5 h-5 text-[#7B7B7B]" />
                                <span className="text-sm text-[#7B7B7B]">
                                    Tech Stack
                                </span>
                            </div>
                            <p className="text-lg font-bold text-[#222222]">
                                {project.techStack?.length || 0} Technologies
                            </p>
                        </motion.div>
                    </AnimatedSection>

                    {/* Action Buttons */}
                    <AnimatedSection
                        delay={0.1}
                        className="flex flex-wrap gap-4 mb-16"
                    >
                        {project.liveUrl && (
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#222222] to-[#333333] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <ExternalLink size={20} />
                                View Live Demo
                            </motion.a>
                        )}
                        {project.githubUrl && (
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#222222] rounded-full font-semibold shadow-lg hover:shadow-xl border border-gray-200 transition-all duration-300"
                            >
                                <Github size={20} />
                                View Source Code
                            </motion.a>
                        )}
                    </AnimatedSection>

                    {/* Tech Stack */}
                    {project.techStack && project.techStack.length > 0 && (
                        <AnimatedSection delay={0.2} className="mb-16">
                            <div className="flex items-center gap-3 mb-6">
                                <Zap className="w-6 h-6 text-[#222222]" />
                                <h2 className="text-2xl font-bold text-[#222222]">
                                    Tech Stack
                                </h2>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {project.techStack.map((tech, index) => (
                                    <TechPill
                                        key={tech}
                                        tech={tech}
                                        index={index}
                                    />
                                ))}
                            </div>
                        </AnimatedSection>
                    )}

                    {/* Long Description */}
                    {project.longDescription && (
                        <AnimatedSection delay={0.3} className="mb-16">
                            <div className="prose prose-lg max-w-none">
                                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100">
                                    <div
                                        className="text-[#222222] leading-relaxed project-content"
                                        dangerouslySetInnerHTML={{
                                            __html: project.longDescription
                                                .replace(
                                                    /## (.*)/g,
                                                    '<h2 class="text-2xl font-bold text-[#222222] mt-8 mb-4 first:mt-0">$1</h2>',
                                                )
                                                .replace(
                                                    /### (.*)/g,
                                                    '<h3 class="text-xl font-semibold text-[#222222] mt-6 mb-3 flex items-center gap-2">$1</h3>',
                                                )
                                                .replace(
                                                    /\*\*(.*?)\*\*/g,
                                                    '<strong class="font-semibold text-[#222222]">$1</strong>',
                                                )
                                                .replace(
                                                    /- (.*)/g,
                                                    '<li class="text-[#7B7B7B] mb-2 ml-4 list-disc">$1</li>',
                                                )
                                                .replace(
                                                    /\n\n/g,
                                                    '</p><p class="text-[#7B7B7B] mb-4 leading-relaxed">',
                                                ),
                                        }}
                                    />
                                </div>
                            </div>
                        </AnimatedSection>
                    )}

                    {/* Features */}
                    {project.features && project.features.length > 0 && (
                        <AnimatedSection delay={0.4} className="mb-16">
                            <div className="flex items-center gap-3 mb-6">
                                <CheckCircle className="w-6 h-6 text-[#222222]" />
                                <h2 className="text-2xl font-bold text-[#222222]">
                                    Key Features
                                </h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {project.features.map((feature, index) => (
                                    <FeatureCard
                                        key={index}
                                        feature={feature}
                                        index={index}
                                    />
                                ))}
                            </div>
                        </AnimatedSection>
                    )}

                    {/* Challenges */}
                    {project.challenges && project.challenges.length > 0 && (
                        <AnimatedSection delay={0.5} className="mb-16">
                            <div className="flex items-center gap-3 mb-6">
                                <AlertTriangle className="w-6 h-6 text-[#222222]" />
                                <h2 className="text-2xl font-bold text-[#222222]">
                                    Challenges Overcome
                                </h2>
                            </div>
                            <div className="space-y-4">
                                {project.challenges.map((challenge, index) => (
                                    <ChallengeCard
                                        key={index}
                                        challenge={challenge}
                                        index={index}
                                    />
                                ))}
                            </div>
                        </AnimatedSection>
                    )}

                    {/* Tags */}
                    {project.tags && project.tags.length > 0 && (
                        <AnimatedSection delay={0.6} className="mb-16">
                            <div className="flex items-center gap-3 mb-6">
                                <Tag className="w-6 h-6 text-[#222222]" />
                                <h2 className="text-2xl font-bold text-[#222222]">
                                    Tags
                                </h2>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, index) => (
                                    <motion.span
                                        key={tag}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{
                                            duration: 0.3,
                                            delay: index * 0.05,
                                        }}
                                        viewport={{ once: true }}
                                        className="px-4 py-2 bg-white text-[#7B7B7B] text-sm font-medium rounded-full border border-gray-200 hover:border-[#222222] hover:text-[#222222] transition-all duration-300"
                                    >
                                        {tag}
                                    </motion.span>
                                ))}
                            </div>
                        </AnimatedSection>
                    )}

                    {/* Related Projects */}
                    {relatedProjects.length > 0 && (
                        <AnimatedSection delay={0.7} className="mb-16">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-bold text-[#222222]">
                                    Related Projects
                                </h2>
                                <Link
                                    to="/#projects"
                                    className="flex items-center gap-1 text-[#7B7B7B] hover:text-[#222222] transition-colors"
                                >
                                    View All
                                    <ChevronRight size={18} />
                                </Link>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {relatedProjects.map((relatedProject) => (
                                    <RelatedProjectCard
                                        key={relatedProject.id}
                                        project={relatedProject}
                                    />
                                ))}
                            </div>
                        </AnimatedSection>
                    )}

                    {/* Back to Projects CTA */}
                    <AnimatedSection delay={0.8}>
                        <motion.div
                            whileHover={{ scale: 1.01 }}
                            className="bg-gradient-to-r from-[#222222] to-[#333333] rounded-3xl p-8 md:p-12 text-center"
                        >
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                Interested in working together?
                            </h3>
                            <p className="text-white/80 mb-8 max-w-xl mx-auto">
                                I'm always open to discussing new projects and
                                opportunities.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link
                                    to="/#projects"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#222222] rounded-full font-semibold hover:bg-gray-100 transition-all duration-300"
                                >
                                    <ArrowLeft size={18} />
                                    Back to Projects
                                </Link>
                                <a
                                    href="/#contact"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-white rounded-full font-semibold border-2 border-white hover:bg-white hover:text-[#222222] transition-all duration-300"
                                >
                                    Get in Touch
                                </a>
                            </div>
                        </motion.div>
                    </AnimatedSection>
                </div>
            </div>
        </div>
    );
}
