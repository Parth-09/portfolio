import { motion } from "framer-motion";
import { FiZap, FiLayers, FiTrendingUp } from "react-icons/fi";

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.5, delay: d },
});

export default function About() {
  return (
    <div className="py-12 md:py-20">
      {/* Title + one-liner */}
      <motion.div {...fade(0)} className="mb-14">
        <h2 className="text-5xl md:text-6xl font-bold text-heading tracking-tight">
          About <span className="text-accent">Me</span>
        </h2>
        <p className="mt-5 text-2xl md:text-3xl text-secondary max-w-4xl leading-snug">
          Full-stack engineer who ships fast, keeps UX silky smooth,  
          and makes data behave.
        </p>
      </motion.div>

      {/* 3 highlight cards */}
      <div className="grid gap-8 md:grid-cols-3">
        <Highlight
          icon={<FiZap className="text-accent" size={28} />}
          title="Move Fast, Keep it Smooth"
          blurb="HMR-friendly state, accessible patterns, buttery animations."
          delay={0.05}
        />
        <Highlight
          icon={<FiLayers className="text-accent" size={28} />}
          title="Clean Backend Structure"
          blurb="Controller-Service-Repo, Swagger docs, and high coverage tests."
          delay={0.1}
        />
        <Highlight
          icon={<FiTrendingUp className="text-accent" size={28} />}
          title="Performance Obsessed"
          blurb="Indexes & pipeline tuning that take queries from minutes to seconds."
          delay={0.15}
        />
      </div>

      {/* Skills row */}
      <motion.div {...fade(0.2)} className="mt-14">
        <h3 className="text-2xl md:text-3xl font-semibold text-heading mb-5">
          My Toolbelt
        </h3>
        <div className="flex flex-wrap gap-3">
          {[
            "React",
            "TypeScript",
            "NestJS",
            "Node.js",
            "MongoDB",
            "Tailwind",
            "Vite",
            "Jest",
          ].map((s) => (
            <span
              key={s}
              className="chip text-lg md:text-xl px-4 py-2 font-medium"
            >
              {s}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div {...fade(0.25)} className="mt-14 grid gap-6 sm:grid-cols-3">
        <Stat label="Years Coding" value="5+" />
        <Stat label="Projects Delivered" value="4+" />
        <Stat label="APIs Built" value="40+" />
      </motion.div>

      {/* CTA
      <motion.div {...fade(0.3)} className="mt-14 flex gap-4">
        <a
          href="#projects"
          className="btn-primary text-lg md:text-xl px-8 py-4"
        >
          See My Work
        </a>
        <a
          href="/assets/Parth_Tawde_Resume.pdf"
          className="btn-ghost text-lg md:text-xl px-8 py-4"
        >
          Download Résumé
        </a>
      </motion.div> */}
    </div>
  );
}

function Highlight({ icon, title, blurb, delay = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay }}
      className="card p-8 hover:shadow-card transition-shadow"
    >
      <div className="flex items-start gap-4">
        <div className="mt-1">{icon}</div>
        <div>
          <h4 className="text-heading font-semibold text-xl md:text-2xl leading-snug">
            {title}
          </h4>
          <p className="text-secondary mt-3 text-lg md:text-xl leading-relaxed">
            {blurb}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

function Stat({ label, value }) {
  return (
    <div className="card p-6 text-center">
      <div className="text-3xl md:text-4xl font-bold text-heading">{value}</div>
      <div className="text-lg md:text-xl text-secondary mt-1">{label}</div>
    </div>
  );
}
