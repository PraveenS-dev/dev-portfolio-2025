// src/components/ScrollToTop.jsx
import { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) setVisible(true);
      else setVisible(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 p-3 rounded-full bg-cyan-500 dark:bg-cyan-400 hover:bg-cyan-600 dark:hover:bg-cyan-500 shadow-cyan-500/50 dark:shadow-cyan-400/50 shadow-lg text-white transition-opacity transition-colors duration-300 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
    >
      <FiArrowUp className="text-xl" />
    </button>
  );

}
