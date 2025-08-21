import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/5 bg-black/60 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <motion.a
          href="/"
          className="flex items-center gap-2"
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .5 }}
        >
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-brand-500 via-emerald-500 to-pink-500 shadow-glow" />
          <span className="font-display text-sm sm:text-base tracking-widest uppercase text-white/90">
            Praveen<span className="text-brand-300">.dev</span>
          </span>
        </motion.a>

        <nav className="flex items-center gap-2">
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg hover:bg-white/5"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg hover:bg-white/5"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="p-2 rounded-lg hover:bg-white/5"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </nav>
      </div>
    </header>
  )
}
