import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { projects, categories } from "../data/projects";

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [hoveredProject, setHoveredProject] = useState(null);

    const filteredProjects =
        activeCategory === "All"
            ? projects
            : projects.filter(
                  (project) =>
                      project.categories &&
                      project.categories.includes(activeCategory),
              );

    return (
        <section
            className="min-h-screen py-20 px-6 bg-[#F8F8F8] font-poppins"
            id="portfolio"
        >
            {/* Header */}
            <div className="max-w-7xl mx-auto mb-16">
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-bold text-[#222222] mb-6 font-poppins">
                        Featured Projects
                    </h2>
                    <p className="text-xl text-[#7B7B7B] max-w-2xl mx-auto leading-relaxed font-poppins">
                        Explore my latest work in AI, full-stack development,
                        and innovative solutions that push the boundaries of
                        technology.
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 font-poppins border text-base ${
                                activeCategory === category
                                    ? "bg-[#222222] text-white border-[#222222] shadow-md"
                                    : "bg-[#F8F8F8] text-[#7B7B7B] border-[#E0E0E0] hover:bg-[#EDEDED]"
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Projects Grid */}
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                            className="group relative"
                        >
                            <Link
                                to={`/${project.slug}`}
                                className="bg-white border border-[#F8F8F8] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col h-full cursor-pointer"
                                onMouseEnter={() => setHoveredProject(project.id)}
                                onMouseLeave={() => setHoveredProject(null)}
                            >
                                {/* Image Container */}
                                <div className="relative h-48 overflow-hidden flex-shrink-0">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-t-2xl"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#222222]/70 via-[#222222]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    {/* View Details Overlay */}
                                    <div
                                        className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                                            hoveredProject === project.id
                                                ? "opacity-100 visible"
                                                : "opacity-0 invisible"
                                        }`}
                                    >
                                        <motion.div
                                            initial={{ scale: 0.8 }}
                                            whileHover={{ scale: 1.1 }}
                                            className="bg-white text-[#222222] px-5 py-2 rounded-full font-medium shadow-lg flex items-center gap-2"
                                        >
                                            View Details
                                            <ArrowRight size={16} />
                                        </motion.div>
                                    </div>

                                    {/* Quick action buttons on hover */}
                                    <div
                                        className={`absolute bottom-3 right-3 flex gap-2 transition-all duration-300 ${
                                            hoveredProject === project.id
                                                ? "opacity-100 translate-y-0"
                                                : "opacity-0 translate-y-2"
                                        }`}
                                    >
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                onClick={(e) => e.stopPropagation()}
                                                className="bg-white text-[#222222] p-2 rounded-full border border-[#F8F8F8] hover:bg-[#F8F8F8] transition-all duration-200 hover:scale-110 shadow-md"
                                                title="View Live"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <ExternalLink size={14} />
                                            </a>
                                        )}
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                onClick={(e) => e.stopPropagation()}
                                                className="bg-white text-[#222222] p-2 rounded-full border border-[#F8F8F8] hover:bg-[#F8F8F8] transition-all duration-200 hover:scale-110 shadow-md"
                                                title="View Code"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Github size={14} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Content - Flexible container */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-start justify-between mb-3">
                                        <h3 className="text-xl font-bold text-[#222222] group-hover:text-[#7B7B7B] transition-colors font-poppins">
                                            {project.title}
                                        </h3>
                                        <span className="text-xs font-medium text-[#7B7B7B] bg-[#F8F8F8] px-2 py-1 rounded-full flex-shrink-0">
                                            {project.categories
                                                ? project.categories[0]
                                                : ""}
                                        </span>
                                    </div>

                                    <p className="text-[#7B7B7B] text-sm leading-relaxed mb-4 line-clamp-3 font-poppins">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags?.slice(0, 3).map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className="text-xs px-2 py-1 bg-[#F8F8F8] text-[#7B7B7B] rounded-md"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                        {project.tags?.length > 3 && (
                                            <span className="text-xs px-2 py-1 bg-[#F8F8F8] text-[#7B7B7B] rounded-md">
                                                +{project.tags.length - 3}
                                            </span>
                                        )}
                                    </div>

                                    {/* Spacer to push button to bottom */}
                                    <div className="flex-grow"></div>

                                    {/* View Project Button */}
                                    <div className="mt-auto pt-2">
                                        <div className="w-full bg-gradient-to-r from-[#222222] to-[#333333] text-white text-sm font-medium py-3 px-4 rounded-xl hover:from-[#333333] hover:to-[#444444] transition-all duration-300 text-center flex items-center justify-center gap-2 group/btn font-poppins">
                                            Explore Project
                                            <ArrowRight
                                                size={16}
                                                className="group-hover/btn:translate-x-1 transition-transform"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Bottom CTA */}
            <div className="max-w-4xl mx-auto mt-20 text-center">
                <div className="bg-[#222222] rounded-2xl p-8 text-white border border-[#F8F8F8]">
                    <h3 className="text-2xl font-bold mb-4 font-poppins">
                        Want to see more?
                    </h3>
                    <p className="text-[#7B7B7B] mb-6 font-poppins">
                        Check out my GitHub for additional projects and
                        contributions
                    </p>
                    <a
                        href="https://github.com/singhalansh/"
                        className="inline-flex items-center gap-2 bg-white text-[#222222] font-semibold px-6 py-3 rounded-lg hover:bg-[#F8F8F8] transition-all duration-200 hover:scale-105 font-poppins"
                    >
                        <Github size={20} />
                        View All Projects
                    </a>
                </div>
            </div>
        </section>
    );
}
