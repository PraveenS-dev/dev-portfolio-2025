import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
    {
        title: "JobSeekr Platform",
        description:
            "A full-stack recruitment platform built with React, Laravel, and Node.js. Supports job seekers, employers, and admins with real-time features.",
        tech: ["React", "Laravel", "Node.js", "Docker", "MySQL", "MongoDB"],
        link: "https://github.com/PraveenS-dev/jobseekr-platform",
        live_link: "https://jobseekr-platform.vercel.app/",
    },
    {
        title: "MERN Project",
        description:
            "Medium-sized project using MERN stack with authentication, dashboard, and CRUD operations.",
        tech: ["MongoDB", "Express", "React", "Node.js"],
        link: "https://github.com/PraveenS-dev/mern-secure-crud-app",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
                >
                    My Projects
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.03 }}
                            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden group"
                        >
                            <div className="p-6 flex flex-col h-full">
                                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t, i) => (
                                        <span
                                            key={i}
                                            className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex items-center gap-4 mt-auto">
                                    {/* Always show GitHub */}
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:underline"
                                    >
                                        <FiGithub /> Code
                                    </a>
                                    {/* Show Live only if it exists */}
                                    {project.live_link && (
                                        <a
                                            href={project.live_link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-md hover:shadow-lg hover:scale-105 transform transition-all duration-300"
                                        >
                                            <Globe className="text-lg" /> Live
                                        </a>
                                    )}

                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
