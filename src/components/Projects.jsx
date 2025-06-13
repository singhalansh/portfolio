import React, { useState } from "react";
import { ExternalLink, Github, Play, Zap } from "lucide-react";
import lawyerupimg from "../assets/lawyerup.png" 
import navigateaiimg from "../assets/navigateai.png";

const projects = [
  {
    id: 1,
    title: "Luna - AI Restaurant Receptionist",
    description:
      "Voice-based agent built using Vapi that handles reservations, FAQs, and customer interactions in natural language.",
    image:
      "https://media.licdn.com/dms/image/v2/D5610AQEpFnAEFBnoKw/videocover-low/B56ZdBE6SVHoBg-/0/1749143501183?e=2147483647&v=beta&t=qfTuACLdMLNmYW-tJUFnqGtef0uoB7f628i8gtspZc8",
    tags: ["VAPI", "Voice AI", "Agentic AI", "real life"],
    categories: ["AI Agents", "Chatbots"],
    liveUrl:
      "https://vapi.ai?demo=true&shareKey=63c7a6f5-1eaa-427e-b090-18675f7af789&assistantId=eec0247b-d45f-4d62-b8e6-0fece73b1ca9",
  },
  {
    id: 2,
    title: "Vasundhara",
    description:
      "Award-winning climate tech platform that promotes sustainability through carbon tracking, gamification, and eco rewards.",
    image:
      "https://media.istockphoto.com/id/163858567/vector/three-illustrated-green-leaves-in-a-circle.jpg?s=612x612&w=0&k=20&c=MSo6IWhtqa0m9_JQUwDFdmWgsrm2SCSg3FbESxNIPmA=",
    tags: ["Sustainability", "Gamification", "MERN", "Hackathon Winner"],
    categories: ["Mobile", "AI/ML", "Full Stack"],
    githubUrl: "https://github.com/singhalansh/vasundhara",
  },
  {
    id: 3,
    title: "LawyerUp",
    description:
      "AI-powered legal helpdesk that answers legal queries, explains rights, and recommends next steps. Built for LexHack.",
    image:lawyerupimg,
    tags: ["LegalTech", "RAG", "Chatbot", "Hackathon winner"],
    categories: ["Full Stack", "Chatbots", "AI Agents"],

    githubUrl: "https://github.com/singhalansh/lawyerup-app",
  },
  {
    id: 4,
    title: "Navigate AI - Object Tracker",
    description:
      "Real-time YOLO + OpenCV-based vehicle detection and multi-object tracker with timestamping and counting.",
    image:
      navigateaiimg,
    tags: ["YOLO", "OpenCV", "Python", "Computer Vision", "Hackathon Winner"],
    categories: ["Computer Vision", "AI/ML"],
    liveUrl: "https://navigateai.streamlit.app/",
    githubUrl: "https://github.com/singhalansh/object-detection-and-tracking",
  },
  {
    id: 5,
    title: "MegaBlog",
    description:
      "A sleek MERN-based blog platform powered by Appwrite for backend services and auth. Full-stack showcase project.",
    image:
      "https://kinsta.com/wp-content/uploads/2023/04/react-must-be-in-scope-when-using-jsx.jpg",
    tags: ["MERN", "Appwrite", "Blog", "Full Stack"],
    categories: ["Full Stack"],
    githubUrl: "https://github.com/singhalansh/megablog",
  },
  {
    id: 6,
    title: "Mental Health Bot",
    description:
      "Empathetic RAG-based chatbot for mental health support built with n8n and MongoDB, no-code workflows only.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3q4meyK9t48AxulnZhiKJbQKSCO4txaf_yA&s",
    tags: ["Mental Health", "n8n", "RAG", "MongoDB"],
    categories: ["Chatbots", "AI Agents"],
  },
  {
    id: 7,
    title: "Bablu Bot",
    description:
      "Your personal AI assistant trained on all things Ansh — built using RAG and embedding-based retrieval.",
    image:
      "https://i0.wp.com/living.ai/wp-content/uploads/2020/12/Details18.jpg?fit=680%2C440&quality=89&ssl=1",
    tags: ["RAG", "Embeddings", "Chatbot", "OpenAI"],
    categories: ["Personal", "AI Agents", "Chatbots"],
  },
  {
    id: 8,
    title: "EMS - Employee Manager",
    description:
      "Full-stack dashboard to manage employees, tasks, and leaves with modern UI and role-based access control.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoszakz2X5s1Vu0AgSyxCxTpDMckLOhrxQxQ&s",
    tags: ["MERN", "Dashboard", "RBAC", "CRUD"],
    categories: ["Full Stack"],
    githubUrl: "https://github.com/singhalansh/ems-platform",
  },
  {
    id: 9,
    title: "MLSMOTE Balancer",
    description:
      "A utility for handling multi-label imbalance in datasets using MLSMOTE technique. Plug-and-play for ML pipelines.",
    image:
      "https://dl.acm.org/cms/attachment/html/10.1145/3512452.3512453/assets/html/images/image2.png",
    tags: ["Machine Learning", "Data Imbalance", "SMOTE", "Python"],
    categories: ["AI/ML"],
  },
  {
    id: 10,
    title: "UNet 3D Medical Segmentation",
    description:
      "3D UNet implementation in PyTorch for volumetric data segmentation of medical scans. GPU-accelerated.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj5FtYNQLtoqdTeke5NLnhSenhIngf2c-LZA&s",
    tags: ["Medical Imaging", "3D UNet", "PyTorch", "Deep Learning"],
    categories: ["AI/ML"],
  },
  {
    id: 11,
    title: "Virtual Keyboard ",
    description:
      "A virtual keyboard that uses OpenCV and hand landmark tracking to detect fingertip movements and simulate key presses in real-time.",
    image:
      "https://editor.analyticsvidhya.com/uploads/18187Screenshot%202021-09-16%20224952.png",
    tags: ["OpenCV", "Hand Tracking", "Python", "Human-Computer Interaction"],
    categories: ["Computer Vision", "AI/ML", "Personal"],
    githubUrl:
      "https://github.com/singhalansh/projects/blob/master/Virtual_Keyboard.py",
  },
  {
    id: 12,
    title: "VisionScope ",
    description:
      "A real-time computer vision system that detects and highlights facial features including face, eyes, and lips using OpenCV. Built for rapid and responsive facial analysis.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwJns0JqaFaxnXG_zbRtFFVzOfco1uIxypgQ&s",
    tags: ["OpenCV", "Face Detection", "Eyes", "Lips", "Real-time", "Python"],
    categories: ["Computer Vision", "AI/ML", "Personal"],
    githubUrl:
      "https://github.com/singhalansh/projects/blob/master/smile%20detection.py",
  },
];

const categories = [
  "All",
  "AI Agents",
  "AI/ML",
  "Chatbots",
  "Computer Vision",
  "Full Stack",
  "Mobile",
  "Personal",
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.categories && project.categories.includes(activeCategory)
        );

  return (
    <section className="min-h-screen py-20 px-6 bg-[#F8F8F8] font-poppins">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-[#222222] mb-6 font-poppins">
            Featured Projects
          </h2>
          <p className="text-xl text-[#7B7B7B] max-w-2xl mx-auto leading-relaxed font-poppins">
            Explore my latest work in AI, full-stack development, and innovative
            solutions that push the boundaries of technology.
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
            <div
              key={project.id}
              className={`group relative bg-white border border-[#F8F8F8] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col h-full`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-t-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#222222]/60 via-[#222222]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Overlay Actions */}
                <div
                  className={`absolute inset-0 flex items-center justify-center gap-3 transition-all duration-300 ${
                    hoveredProject === project.id
                      ? "opacity-100 visible"
                      : "opacity-0 invisible"
                  }`}
                >
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="bg-white text-[#222222] p-3 rounded-full border border-[#F8F8F8] hover:bg-[#F8F8F8] transition-all duration-200 hover:scale-110 shadow"
                      title="View Live"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      className="bg-white text-[#222222] p-3 rounded-full border border-[#F8F8F8] hover:bg-[#F8F8F8] transition-all duration-200 hover:scale-110 shadow"
                      title="View Code"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={18} />
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
                    {project.categories ? project.categories.join(", ") : ""}
                  </span>
                </div>

                <p className="text-[#7B7B7B] text-sm leading-relaxed mb-4 line-clamp-3 font-poppins">
                  {project.description}
                </p>

                {/* Spacer to push button to bottom */}
                <div className="flex-grow"></div>

                {/* Action Button - Fixed at bottom */}
                <div className="mt-auto pt-2 flex gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="flex-1 bg-[#222222] text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-[#333333] transition-all duration-200 text-center flex items-center justify-center gap-2 group/btn font-poppins"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink
                        size={14}
                        className="group-hover/btn:scale-110 transition-transform"
                      />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      className="flex-1 border border-[#7B7B7B] text-[#222222] text-sm font-medium py-2 px-4 rounded-lg hover:bg-[#F8F8F8] transition-all duration-200 text-center flex items-center justify-center gap-2 group/btn font-poppins"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github
                        size={14}
                        className="group-hover/btn:scale-110 transition-transform"
                      />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
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
            Check out my GitHub for additional projects and contributions
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
