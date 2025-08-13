// Projects.jsx
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiTag } from "react-icons/fi";

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.5, delay: d },
});

const projects = [
  {
    title: "Memories – Social Media App (MERN)",
    time: "Feb 2023 – Mar 2023",
    blurb: "0→1 social app with posts, auth, and real-time updates.",
    tags: ["React", "Node.js", "MongoDB", "Redux", "JWT"],
    links: {
      github: "#",
      demo: "#",
    },
  },
  {
    title: "Video Calling + Live Translation",
    time: "2023",
    blurb: "WebRTC calling with Azure Speech-to-Text + Translate.",
    tags: ["React", "WebRTC", "Azure STT", "Azure Translate"],
    links: {
      github: "#",
      demo: "#",
    },
  },
  // Add more...
];

export default function Projects() {
  return (
    <section className="py-12 md:py-20">
      <motion.h2
        {...fade(0)}
        className="text-5xl md:text-6xl font-bold text-heading mb-14 text-center"
      >
        Projects
      </motion.h2>

      <div className="relative max-w-6xl mx-auto">
        {/* Center vertical line */}
        <div
          aria-hidden="true"
          className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-accent/60 to-transparent transform -translate-x-1/2"
        />

        <div className="space-y-16">
          {projects.map((p, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div
                key={p.title}
                className={`flex items-center justify-between w-full ${
                  isLeft ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Project card */}
                <motion.div
                  {...fade(i * 0.05)}
                  className="relative w-full md:w-[45%] card p-6 md:p-8"
                >
                  <h3 className="text-2xl font-semibold">{p.title}</h3>
                  <time className="text-sm text-secondary">{p.time}</time>
                  <p className="mt-3 text-secondary">{p.blurb}</p>

                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <FiTag className="text-accent" />
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 text-sm border rounded-full border-border/60 text-secondary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex gap-4">
                    {p.links?.github && (
                      <a
                        href={p.links.github}
                        className="inline-flex items-center gap-1 text-accent hover:underline"
                      >
                        <FiGithub /> Code
                      </a>
                    )}
                    {p.links?.demo && (
                      <a
                        href={p.links.demo}
                        className="inline-flex items-center gap-1 text-accent hover:underline"
                      >
                        <FiExternalLink /> Live
                      </a>
                    )}
                  </div>
                </motion.div>

                {/* Connector dot */}
                <div className="hidden md:flex items-center justify-center w-6 h-6 rounded-full border-2 border-accent bg-white z-10 relative" />
                {/* Empty space for alignment */}
                <div className="w-full md:w-[45%]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
