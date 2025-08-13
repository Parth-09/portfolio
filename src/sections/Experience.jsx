// Experience.jsx
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiServer,
  FiHeadphones,
  FiCheckSquare,
  FiUsers,
  FiTag,
  FiChevronDown,
  FiChevronUp,
  FiGithub,
  FiCalendar,
} from "react-icons/fi";

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.5, delay: d },
});

// ---- Data ----
const EXPERIENCES = [
  {
    icon: <FiServer className="text-accent" size={24} />,
    role: "Software Engineering Intern",
    company: "Trust Your Supplier",
    period: "Aug 2024 – Jun 2025",
    kpis: [
      { label: "Query time ↓", value: "~60s → ~3s" },
      { label: "APIs documented", value: "40+" },
      { label: "Stack", value: "NestJS • MongoDB • Swagger" },
    ],
    tags: ["Backend", "APIs", "MongoDB", "Agile", "CI/CD"],
    details: [
      "Built and optimized REST APIs with NestJS and MongoDB.",
      "Cut query latency from ~60s to ~3s via indexes and pipeline tuning.",
      "Documented 40+ API endpoints in Swagger for cross-team clarity.",
      "Worked in Agile sprints, improving the CI/CD pipeline.",
    ],
  },
  {
    icon: <FiHeadphones className="text-accent" size={24} />,
    role: "Technical Support Specialist",
    company: "University of Illinois Chicago",
    period: "Aug 2023 – May 2024",
    kpis: [
      { label: "Users supported", value: "100+ stakeholders" },
      { label: "Tools", value: "Blackboard • Echo360 • Panopto" },
      { label: "Tickets", value: "TeamDynamix (TDX)" },
    ],
    tags: ["Support", "EdTech", "TDX", "Communication"],
    details: [
      "Provided front-line support to 100+ professors and students.",
      "Translated complex issues into clear, actionable guidance.",
      "Managed requests in TeamDynamix (TDX) to ensure timely resolution.",
    ],
  },
  {
    icon: <FiCheckSquare className="text-accent" size={24} />,
    role: "Software QA Engineering Intern",
    company: "QA Mentor",
    period: "Jan 2023 – May 2023",
    kpis: [
      { label: "Defect tracking", value: "JIRA" },
      { label: "Coverage", value: "Cross-browser/platform" },
      { label: "Quality", value: "Regression suites" },
    ],
    tags: ["QA", "Testing", "JIRA", "Regression"],
    details: [
      "Created and executed manual test cases for web UI and flows.",
      "Logged and tracked defects in JIRA; partnered with devs for fixes.",
      "Ran regression suites to verify fixes and protect release quality.",
      "Performed cross-browser/platform checks for consistency.",
    ],
  },
  {
    icon: <FiUsers className="text-accent" size={24} />,
    role: "Orientation Leader",
    company: "University of Illinois Chicago",
    period: "May 2022 – Aug 2022",
    kpis: [
      { label: "Families guided", value: "1,000+" },
      { label: "Events", value: "Tours • Presentations • Q&A" },
      { label: "Focus", value: "Communication" },
    ],
    tags: ["Leadership", "Communication", "Student Success"],
    details: [
      "Welcomed and guided 1,000+ incoming students and families.",
      "Facilitated campus tours, presentations, and Q&A sessions.",
      "Coordinated with staff to resolve concerns and share resources.",
    ],
  },
];

// Collect unique tags for filtering
const ALL_TAGS = ["All", ...Array.from(new Set(EXPERIENCES.flatMap(e => e.tags)))];

export default function Experience() {
  const [activeTag, setActiveTag] = useState("All");
  const [openIndex, setOpenIndex] = useState(0); // first item open by default

  const filtered = useMemo(() => {
    if (activeTag === "All") return EXPERIENCES;
    return EXPERIENCES.filter(exp => exp.tags.includes(activeTag));
  }, [activeTag]);

  return (
    <section className="py-12 md:py-20">
      <motion.h2
        {...fade(0)}
        className="text-5xl md:text-6xl font-bold text-heading mb-6"
      >
        Experience
      </motion.h2>

      {/* Tag Filters */}
      <motion.div
        {...fade(0.05)}
        className="mb-10 flex flex-wrap gap-2"
        role="tablist"
        aria-label="Filter experience by tag"
      >
        {ALL_TAGS.map(tag => (
          <button
            key={tag}
            role="tab"
            aria-selected={activeTag === tag}
            onClick={() => setActiveTag(tag)}
            className={[
              "px-3 py-1.5 rounded-full border text-sm",
              activeTag === tag
                ? "border-accent text-accent"
                : "border-border/60 text-secondary hover:text-heading",
            ].join(" ")}
          >
            <span className="inline-flex items-center gap-2">
              <FiTag className="opacity-80" /> {tag}
            </span>
          </button>
        ))}
      </motion.div>

      {/* Vertical Timeline */}
      <div className="relative">
        {/* Vertical rail */}
        <div
          aria-hidden="true"
          className="absolute left-5 md:left-7 top-0 bottom-0 w-px bg-gradient-to-b from-accent/60 to-transparent"
        />

        <ul className="space-y-8">
          <AnimatePresence initial={false} mode="popLayout">
            {filtered.map((exp, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.li
                  key={`${exp.role}-${exp.period}`}
                  {...fade(i * 0.05)}
                  layout
                  className="relative pl-14 md:pl-20"
                >
                  {/* Timeline node */}
                  <span
                    aria-hidden="true"
                    className="absolute left-3 md:left-5 mt-2 h-7 w-7 rounded-full border-2 border-accent bg-white flex items-center justify-center shadow-sm"
                  >
                    {exp.icon}
                  </span>

                  <motion.article
                    layout
                    className="card p-6 md:p-8"
                    aria-label={`${exp.role} at ${exp.company}`}
                  >
                    <header className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                      <div>
                        <h3 className="text-2xl font-semibold text-heading">
                          {exp.role}
                        </h3>
                        <p className="text-lg text-secondary">
                          {exp.company}
                        </p>
                      </div>
                      <p className="inline-flex items-center gap-2 text-sm md:text-base text-secondary">
                        <FiCalendar className="text-accent" />
                        {exp.period}
                      </p>
                    </header>

                    {/* KPI badges */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.kpis.map(k => (
                        <span
                          key={k.label + k.value}
                          className="px-3 py-1 rounded-full border border-border/60 text-sm text-secondary"
                          title={k.label}
                        >
                          <span className="font-medium text-heading/90">{k.value}</span>
                          <span className="ml-2 opacity-70">• {k.label}</span>
                        </span>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      {exp.tags.map(t => (
                        <button
                          key={t}
                          onClick={() => setActiveTag(t)}
                          className="px-2.5 py-1 text-xs rounded-full border border-border/60 text-secondary hover:text-heading"
                          aria-label={`Filter by ${t}`}
                          title={`Filter by ${t}`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>

                    {/* Expand / collapse */}
                    <motion.button
                      onClick={() => setOpenIndex(isOpen ? -1 : i)}
                      className="mt-4 inline-flex items-center gap-2 text-accent underline-offset-4 hover:underline"
                      aria-expanded={isOpen}
                      aria-controls={`exp-panel-${i}`}
                    >
                      {isOpen ? (
                        <>
                          <FiChevronUp /> Hide details
                        </>
                      ) : (
                        <>
                          <FiChevronDown /> Show details
                        </>
                      )}
                    </motion.button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`exp-panel-${i}`}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35 }}
                          className="overflow-hidden"
                        >
                          <ul className="mt-4 list-disc list-inside text-lg text-secondary space-y-2">
                            {exp.details.map((d, idx) => (
                              <li key={idx}>{d}</li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.article>
                </motion.li>
              );
            })}
          </AnimatePresence>
        </ul>
      </div>

      {/* Optional: portfolio CTA row (code samples / resume) */}
      <motion.div {...fade(0.1)} className="mt-10 flex flex-wrap gap-4">
        <a
          href="/resume.pdf"
          className="btn btn-primary"
          aria-label="Download resume PDF"
        >
          Download Resume
        </a>
        <a
          href="https://github.com/Parth-09"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 underline-offset-4 hover:underline text-accent"
          aria-label="View GitHub profile"
        >
          <FiGithub /> GitHub
        </a>
      </motion.div>
    </section>
  );
}
