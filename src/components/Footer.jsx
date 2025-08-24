import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  const toTop = () => {
    const el = document.getElementById("hero");
    if (el) {
      const prefersReduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches; 
      el.scrollIntoView({ behavior: prefersReduce ? "auto" : "smooth", block: "start" });
    } 
  };

  return (
    <footer className="border-t border-border/60 bg-background/70 backdrop-blur">
      <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-secondary">
          © {new Date().getFullYear()} Parth Tawde · Built with React & Tailwind
        </p>

        <div className="flex items-center gap-3">
          <a
            href="mailto:parth.tawde.dev@gmail.com"
            className="icon-btn"
            aria-label="Email"
          >
            <FiMail />
          </a>
          <a
            href="https://github.com/Parth-09"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/parth-tawde/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>

          <button
            type="button"
            onClick={toTop}
            className="ml-2 inline-flex items-center gap-2 px-3 py-1.5 rounded border border-border/60 hover:text-heading"
            aria-label="Back to top"
            title="Back to top"
          >
            <FiArrowUp /> Top
          </button>
        </div>
      </div>
    </footer>
  );
}
