import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiServer,
  FiHeadphones,
  FiCheckSquare,
  FiUsers,
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
    role: "AI Software Engineer",
    company: "Nachway, Remote",
    period: "Jun 2025 – Oct 2025",  // Adjust dates as needed
    kpis: [
      { label: "End users served", value: "10,000+" },
      { label: "Latency reduction", value: "40%" },
      { label: "Time saved weekly", value: "25+ hrs" },
    ],
    tags: ["React", "Node.js", "TypeScript", "Python", "OpenAI GPT-4", "LangChain", "Vector DBs", "AI Agents"],
    details: [
      "Developed and deployed full-stack AI applications using JavaScript/TypeScript, Node.js, React, and Python, serving 10,000+ end users with intelligent automation features.",
      "Built scalable AI solutions integrating OpenAI GPT-4 and LangChain frameworks, reducing manual data processing workflows by 60%.",
      "Optimized AI agent performance through systematic prompt engineering and A/B testing, analyzing metrics via monitoring dashboards to reduce response latency by 40% and improve accuracy by 15%.",
      "Engineered custom AI agents for automating data extraction, report generation, and customer support workflows using LangChain and vector databases.",
      "Enabled automated decision-making for business operations, saving 25+ hours per week in manual processing.",
    ],
  },
  {
    icon: <FiServer className="text-accent" size={24} />,
    role: "Software Engineering Intern",
    company: "Trust Your Supplier, Chicago, IL",
    period: "Aug 2024 – Jun 2025",
    kpis: [
      { label: "Suppliers handled", value: "2,582" },
      { label: "APIs documented", value: "40+" },
      { label: "Delivery", value: "15% faster" },
    ],
    tags: ["React", "NestJS", "TypeScript", "MongoDB", "Agile", "CI/CD", "Swagger"],
    details: [
      "Developed a modular React UI dashboard with buyer-specific state management and interactive data tables for 2,582 suppliers.",
      "Designed RESTful APIs with NestJS (TypeScript) using controller-service-repository pattern for supplier ranking, CRUD, and data flows.",
      "Contributed to Agile practices (stand-ups, sprint planning) reducing delivery timelines by 15%.",
      "Collaborated on CI/CD pipelines, resolving merge conflicts and deploying stable builds.",
      "Utilized JIRA for workflow management and authored 40+ Swagger-documented API endpoints.",
      "Engineered indexing and filtering algorithms to improve ranking accuracy and reduce query latency.",
      "Built accordion-based views for international addresses and developed Moody’s data module with conditional logic (readyForPreload flag).",
    ],
  },
  {
    icon: <FiHeadphones className="text-accent" size={24} />,
    role: "Technical Specialist",
    company: "Learning Technology Solutions, Chicago, IL",
    period: "Aug 2023 – May 2024",
    kpis: [
      { label: "Users supported", value: "Faculty + Students" },
      { label: "Tools", value: "Blackboard • Echo360 • Panopto" },
      { label: "Tickets", value: "TeamDynamix (TDX)" },
    ],
    tags: ["Support", "EdTech", "Java", "TDX", "Communication"],
    details: [
      "Partnered with faculty to enhance courses using Blackboard, Echo360, and Panopto, integrating Java-based elements for engagement.",
      "Provided front-line support to professors and students, translating technical concepts for non-technical audiences.",
      "Managed service requests through TDX and ensured timely, high-quality resolutions.",
      "Resolved course setup issues by aligning technical steps with faculty needs.",
    ],
  },
  {
    icon: <FiCheckSquare className="text-accent" size={24} />,
    role: "Software Engineering Intern",
    company: "QA Mentor, Mumbai, India",
    period: "May 2021 – Aug 2021",
    kpis: [
      { label: "Deployment time", value: "-30%" },
      { label: "Platform", value: "CertCentral" },
      { label: "Optimization", value: "+30% engagement" },
    ],
    tags: ["Python", "Agile", "CI/CD", "Testing", "UI/UX", "Linear Programming"],
    details: [
      "Automated CI/CD pipeline steps with Python to integrate ML models, reducing deployment time by 30%.",
      "Participated in Agile sprints enhancing CertCentral platform with integration testing and bug fixes.",
      "Redesigned UI templates with user-centric approach, improving navigation efficiency by 30% and engagement by 25%.",
      "Applied optimization techniques (e.g., linear programming) to tailor products, raising engagement metrics by ~30%.",
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
      { label: "Focus", value: "Leadership & Communication" },
    ],
    tags: ["Leadership", "Communication", "Student Success"],
    details: [
      "Welcomed and guided 1,000+ incoming students and families through orientation programs.",
      "Facilitated tours, presentations, and Q&A sessions to ease student transitions.",
      "Collaborated with staff to organize events, resolve concerns, and ensure student success.",
    ],
  },
];

export default function Experience() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-12 md:py-20">
      <motion.h2
        {...fade(0)}
        className="text-5xl md:text-6xl font-bold text-heading mb-6"
      >
        Experience
      </motion.h2>

      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute left-5 md:left-7 top-0 bottom-0 w-px bg-gradient-to-b from-accent/60 to-transparent"
        />

        <ul className="space-y-8">
          <AnimatePresence initial={false} mode="popLayout">
            {EXPERIENCES.map((exp, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.li
                  key={`${exp.role}-${exp.period}`}
                  {...fade(i * 0.05)}
                  layout
                  className="relative pl-14 md:pl-20"
                >
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

                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      {exp.tags.map(t => (
                        <span
                          key={t}
                          className="px-2.5 py-1 text-xs rounded-full border border-border/60 text-secondary"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

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
    </section>
  );
}
