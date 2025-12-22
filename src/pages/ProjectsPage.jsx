import React, { useState } from "react";
import { motion } from "motion/react";
import { Code, ExternalLink, Github, Calendar, Tag } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
        technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
        githubUrl: "https://github.com/yh010",
        liveUrl: "https://example.com",
        image: "/Crazy.png",
        category: "Full Stack",
        date: "2024",
    },
    {
        id: 2,
        title: "Task Management App",
        description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
        technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
        githubUrl: "https://github.com/yh010",
        liveUrl: "https://example.com",
        image: "/vite.svg",
        category: "Frontend",
        date: "2024",
    },
    {
        id: 3,
        title: "Weather Dashboard",
        description: "Real-time weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.",
        technologies: ["React", "OpenWeather API", "Chart.js", "CSS3"],
        githubUrl: "https://github.com/yh010",
        liveUrl: "https://example.com",
        image: "/Crazy.png",
        category: "Frontend",
        date: "2023",
    },
    {
        id: 4,
        title: "REST API Service",
        description: "Scalable REST API built with Express.js, featuring authentication, rate limiting, and comprehensive documentation.",
        technologies: ["Node.js", "Express", "PostgreSQL", "JWT", "Swagger"],
        githubUrl: "https://github.com/yh010",
        liveUrl: "https://example.com",
        image: "/vite.svg",
        category: "Backend",
        date: "2024",
    },
    {
        id: 5,
        title: "Social Media Dashboard",
        description: "Analytics dashboard for social media platforms with data visualization, scheduling, and engagement tracking.",
        technologies: ["React", "Redux", "D3.js", "Material-UI", "GraphQL"],
        githubUrl: "https://github.com/yh010",
        liveUrl: "https://example.com",
        image: "/Crazy.png",
        category: "Full Stack",
        date: "2023",
    },
    {
        id: 6,
        title: "Portfolio Website",
        description: "Personal portfolio website showcasing projects, skills, and experience with smooth animations and responsive design.",
        technologies: ["React", "Motion.dev", "Tailwind CSS", "Vite"],
        githubUrl: "https://github.com/yh010",
        liveUrl: "https://example.com",
        image: "/vite.svg",
        category: "Frontend",
        date: "2024",
    },
];

function ProjectsPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const categories = ["All", ...new Set(projects.map((project) => project.category))];

    const filteredProjects =
        selectedCategory === "All"
            ? projects
            : projects.filter((project) => project.category === selectedCategory);

    return (
        <div className="min-h-screen flex flex-col bg-[#f8f9fa] text-black px-6">
            {/* Header Section */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="py-12"
            >
                <div className="md:flex py-8">
                    <motion.div
                        initial={{
                            opacity: 0.5,
                            scale: 1.1,
                            y: -10,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: 0,
                        }}
                        transition={{
                            ease: "easeInOut",
                            duration: 1,
                        }}
                        className="w-full md:w-3/4 md:text-8xl 2xl:text-9xl md:text-start text-5xl text-[#250902] font-semibold font-fjalla"
                        style={{
                            WebkitTextStroke: "0.75px #003566",
                            color: "#250902",
                        }}
                    >
                        Projects
                    </motion.div>
                    <div className="pt-4 md:pl-4">
                        <span className="text-[#6c757d]">
                            A showcase of my work spanning web development, full-stack applications,
                            and creative solutions built with modern technologies.
                        </span>
                    </div>
                </div>
            </motion.div>

            {/* Category Filter */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap gap-3 mb-8"
            >
                {categories.map((category) => (
                    <motion.button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === category
                                ? "bg-[#0a2463] text-white"
                                : "bg-white text-black border-2 border-[#dee2e6] hover:border-[#0a2463]"
                            }`}
                    >
                        {category}
                    </motion.button>
                ))}
            </motion.div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
                {filteredProjects.map((project, idx) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                        whileHover={{ y: -5 }}
                        className="bg-white rounded-lg shadow-lg border border-[#dee2e6] overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
                    >
                        {/* Project Image */}
                        <div className="relative h-48 bg-[#f8f9fa] overflow-hidden">
                            <motion.img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            />
                            <div className="absolute top-4 right-4 flex gap-2">
                                {project.githubUrl && (
                                    <motion.a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1 }}
                                        className="p-2 bg-white rounded-full shadow-md hover:bg-[#f8f9fa]"
                                    >
                                        <Github className="h-4 w-4 text-[#250902]" />
                                    </motion.a>
                                )}
                                {project.liveUrl && (
                                    <motion.a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1 }}
                                        className="p-2 bg-white rounded-full shadow-md hover:bg-[#f8f9fa]"
                                    >
                                        <ExternalLink className="h-4 w-4 text-[#250902]" />
                                    </motion.a>
                                )}
                            </div>
                        </div>

                        {/* Project Content */}
                        <div className="p-6 flex flex-col flex-grow">
                            {/* Project Header */}
                            <div className="flex items-start justify-between mb-3">
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-[#250902] mb-2">
                                        {project.title}
                                    </h3>
                                    <div className="flex items-center gap-3 text-sm text-[#6c757d]">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="h-3 w-3" />
                                            <span>{project.date}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Tag className="h-3 w-3" />
                                            <span>{project.category}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-2 bg-[#f8f9fa] rounded-lg">
                                    <Code className="h-5 w-5 text-[#0a2463]" />
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-sm text-[#6c757d] mb-4 flex-grow">
                                {project.description}
                            </p>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.technologies.map((tech, techIdx) => (
                                    <span
                                        key={techIdx}
                                        className="px-3 py-1 bg-[#f8f9fa] text-xs font-medium text-[#250902] rounded-full border border-[#dee2e6]"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Empty State */}
            {filteredProjects.length === 0 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-20"
                >
                    <Code className="h-16 w-16 text-[#6c757d] mx-auto mb-4" />
                    <p className="text-[#6c757d]">No projects found in this category.</p>
                </motion.div>
            )}

            {/* Footer */}
            <footer className="border-t border-dashed border-[#d6ccc2] mt-20 py-8 md:py-12 px-4 md:px-0">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 text-xs md:text-sm text-gray-500">
                    <div className="text-center md:text-left">
                        © 2024 Yash Hegde. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default ProjectsPage;

