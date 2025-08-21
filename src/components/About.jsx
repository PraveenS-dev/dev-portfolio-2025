// src/components/About.jsx
import { motion } from "framer-motion";

export default function About() {
    return (
        <section
            id="about"
            className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
        >
            {/* Neon Glow Background Accent */}
            <div className="absolute inset-0 -z-10">
                <div className="w-72 h-72 bg-blue-500/30 blur-3xl rounded-full absolute top-10 left-10 animate-pulse"></div>
                <div className="w-72 h-72 bg-pink-500/20 blur-3xl rounded-full absolute bottom-10 right-10 animate-pulse"></div>
            </div>

            <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">

                {/* Image / Avatar */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="relative flex-shrink-0"
                >
                    <div className="relative">
                        <img
                            src="/Image.jpeg"
                            alt="Praveen Kumar"
                            className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover 
                            border-4 border-cyan-500/70 shadow-lg hover:shadow-xl 
                            transition-all duration-500"
                        />
                        {/* Subtle soft ring */}
                        <span className="absolute inset-0 rounded-full border border-cyan-400/40 pointer-events-none"></span>
                    </div>
                </motion.div>



                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <h2
                        className="text-4xl font-extrabold mb-6 text-gray-900 dark:text-white tracking-wide"
                    >
                        About Me
                    </h2>

                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        Hi, I’m{" "}
                        <span className="font-semibold text-blue-600 dark:text-blue-400">
                            Praveen Kumar
                        </span>, a{" "}
                        <span className="font-medium text-pink-600 dark:text-pink-400">
                            Full Stack Developer
                        </span>{" "}
                        specializing in{" "}
                        <span className="font-semibold text-purple-600 dark:text-purple-400">
                            Laravel & MERN stack
                        </span>
                        . I enjoy building high-performance, real-time applications that combine
                        clean architecture with modern, engaging UI/UX. My experience includes
                        multi-role platforms, scalable APIs, and delivering end-to-end solutions
                        that solve real-world business challenges.
                    </p>

                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                        I’m also passionate about{" "}
                        <span className="font-semibold text-green-600 dark:text-green-400">
                            DevOps practices like Docker and CI/CD
                        </span>
                        , ensuring every project is production-ready and maintainable. I stay
                        curious, constantly exploring new tools and frameworks to create{" "}
                        <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                            efficient, scalable, and impactful solutions
                        </span>
                        . For me, development is not just about code—it’s about crafting digital
                        experiences that make a difference.
                    </p>

                    <p className="text-lg font-medium text-gray-900 dark:text-white italic">
                        Let’s build something amazing together.
                    </p>
                </motion.div>



            </div>
        </section>
    );
}
