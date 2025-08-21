import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Ardhas Technology, Coimbatore",
    duration: "Oct 2024 – Present",
    description:
      "Developing scalable web applications using Laravel, React, and Docker. Designed and deployed dual backend architecture (Laravel + Node.js) with CI/CD pipelines.",
  },
  {
    role: "Web Developer Intern",
    company: "Ardhas Technology, Coimbatore",
    duration: "Jun 2024 – Sep 2024",
    description:
      "Assisted in backend API development and frontend integrations. Contributed to Docker containerization and deployment workflows.",
  },
  {
    role: "Web Developer Intern",
    company: "Digital Garage, Coimbatore",
    duration: "Jan 2024 – May 2024",
    description:
      "Built responsive UI components with React & Tailwind. Supported Laravel + MySQL backend and optimized database queries.",
  },
];

export default function Experience() {
  return (
    <section className="py-16 px-6 md:px-12 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text"
      >
        Experience
      </motion.h2>

      {/* Timeline */}
      <div className="relative border-l-2 border-cyan-500/40 dark:border-cyan-400/40 max-w-3xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="mb-12 ml-8 group"
          >
            {/* Timeline Icon */}
            <span className="absolute -left-4 flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md group-hover:scale-110 transition-transform duration-300">
              <FaBriefcase />
            </span>

            {/* Role + Company */}
            <h3 className="text-xl md:text-2xl font-semibold group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors duration-300">
              {exp.role}
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300">{exp.company}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 italic">{exp.duration}</p>

            {/* Description */}
            <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );

}
