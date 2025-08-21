import { motion } from "framer-motion";
import { FaReact, FaLaravel, FaNodeJs, FaPhp, FaDocker, FaGitAlt, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiMysql, SiExpress, SiTypescript } from "react-icons/si";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: <FaReact className="text-sky-500" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Laravel", icon: <FaLaravel className="text-red-500" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-600" /> },
      { name: "PHP", icon: <FaPhp className="text-indigo-500" /> },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Docker", icon: <FaDocker className="text-sky-600" /> },
      { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
      { name: "CI/CD", icon: <span className="text-purple-500 font-bold">⚡</span> },
    ],
  },
];


const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-12"
        >
          Skills & Tech Stack
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                {group.category}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {group.items.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                  >
                    <div className="text-2xl">{skill.icon}</div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
