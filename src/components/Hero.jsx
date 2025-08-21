// src/components/Hero.jsx
import { motion } from "framer-motion";
import { FiDownload, FiGithub, FiLinkedin } from "react-icons/fi";
import { ReactTyped } from "react-typed";

export default function Hero() {
    return (
        <section
            id="hero"
            className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden"
        >
            <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
                {/* Animated Intro */}
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-5xl sm:text-6xl font-bold mb-4"
                >
                    Hi, I’m{" "}
                    <motion.span
                        animate={{ textShadow: ["0 0 10px #a855f7", "0 0 20px #9333ea", "0 0 10px #a855f7"] }}
                        transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
                        className="text-purple-400"
                    >
                        Praveen Kumar
                    </motion.span>
                </motion.h1>

                {/* Typing animation */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-xl sm:text-2xl text-gray-300 mb-8 h-10"
                >
                    <ReactTyped
                        strings={[
                            "Full Stack Developer",
                            "MERN Stack Specialist",
                            "Laravel + PHP + MySQL",
                            "Docker & CI/CD Enthusiast",
                        ]}
                        typeSpeed={60}
                        backSpeed={40}
                        backDelay={1500}
                        loop
                    />
                </motion.div>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="flex flex-wrap justify-center gap-4"
                >
                    <motion.a
                        href="/Praveen_kumar_FullStack_Resume.pdf" download="Praveen-Kumar-Resume"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 bg-purple-500 text-white px-6 py-3 rounded-2xl shadow-lg hover:bg-purple-600 transition"
                    >
                        <FiDownload /> Download Resume
                    </motion.a>

                    <motion.a
                        href="https://github.com/PraveenS-dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 border border-gray-500 px-6 py-3 rounded-2xl text-gray-300 hover:border-purple-400 hover:text-purple-400 transition"
                    >
                        <FiGithub /> GitHub
                    </motion.a>

                    <motion.a
                        href="https://www.linkedin.com/in/praveen-kumar-b445192ab"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 border border-gray-500 px-6 py-3 rounded-2xl text-gray-300 hover:border-purple-400 hover:text-purple-400 transition"
                    >
                        <FiLinkedin /> LinkedIn
                    </motion.a>
                </motion.div>
            </div>

            {/* Background Glow Blobs */}
            <motion.div
                animate={{ y: [0, -30, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-[600px] h-[600px] bg-purple-600 rounded-full blur-[180px] top-[-200px] left-[-150px] opacity-30"
            />
            <motion.div
                animate={{ y: [0, 30, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-[500px] h-[500px] bg-blue-600 rounded-full blur-[160px] bottom-[-150px] right-[-120px] opacity-30"
            />
        </section>
    );
}
