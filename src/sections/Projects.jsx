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
    title: "Language Omegle – Video Calling App",
    time: "Aug 2023 – Dec 2023",
    blurb:
      "User-friendly video calling interface with 99.9% uptime using Socket.IO for real-time communication. Integrated AI tools like Azure Speech-to-Text and Azure Translate for multilingual conversations. Built with React and Twilio API for video features.",
    tags: ["React", "Socket.IO", "Twilio", "Azure STT", "Azure Translate"],
    links: {
      github: "https://github.com/jayr1867/language_omegle",
      demo: "https://language-omegle.onrender.com/",
    },
  },
  {
    title: "Memories – Social Media Platform (MERN)",
    time: "Feb 2023 – Mar 2023",
    blurb:
      "Full-stack social media app with MERN stack and MVC design. Created RESTful APIs, reusable React components, and optimized state with Redux. Reduced query latency by 90% via indexing, implemented secure JWT login, and used Redis for managing tokens.",
    tags: ["React", "Node.js", "MongoDB", "Redux", "Redis", "JWT"],
    links: {
      github: "https://github.com/Parth-09/Memories",
      demo: "https://memories-project-parth.netlify.app/",
    },
  },
  {
    title: "The Maze Game – AI Opponent",
    time: "Jan 2021 – Feb 2021",
    blurb:
      "Interactive maze game using gyroscope and swipe gestures for smooth controls. Featured an AI heuristics opponent that dynamically adapted to player behavior, boosting engagement by 30%. Led A/B testing discussions, improving retention by 25%.",
    tags: ["Java", "AI Heuristics", "Game Dev", "UX Testing"],
  },
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
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-accent hover:underline"
                      >
                        <FiGithub /> Code
                      </a>
                    )}
                    {p.links?.demo && (
                      <a
                        href={p.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
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
