import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
});

export default function Hero() {
  return (
    <div>
      {/* Small intro text */}
      <motion.p
        {...fadeUp(0.05)}
        className="mb-4 text-lg md:text-xl tracking-wide text-secondary"
      >
        Full-Stack Developer · React · TypeScript · NestJS
      </motion.p>

      {/* Big headline */}
      <motion.h1
        {...fadeUp(0.1)}
        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight"
      >
        Hi, I’m{" "}
        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Parth Tawde
        </span>
        .
      </motion.h1>

      {/* Subheading */}
      <motion.p
        {...fadeUp(0.2)}
        className="mt-6 max-w-3xl text-xl md:text-2xl text-secondary leading-relaxed"
      >
        I build fast, accessible, and data-driven web apps. Recently focused on
        React + TypeScript frontends and API-first backends with NestJS and MongoDB.
      </motion.p>

      {/* CTAs */}
      <motion.div {...fadeUp(0.3)} className="mt-10 flex gap-4">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-lg px-7 py-3 bg-accent text-white text-lg font-medium shadow-md hover:opacity-90 transition"
        >
          View Projects
        </a>
        <a
          href="/assets/Parth_Tawde_Resume.pdf"
          className="inline-flex items-center gap-2 rounded-lg px-7 py-3 border border-border text-lg font-medium text-text hover:bg-darkblue/40 transition"
        >
          Download Résumé
        </a>
      </motion.div>
    </div>
  );
}
