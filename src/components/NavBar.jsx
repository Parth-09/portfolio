import { useEffect, useMemo, useState } from "react";
import { FiMenu, FiX, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  // Scroll spy
  useEffect(() => {
    const opts = { root: null, threshold: 0.55 };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
    }, opts);

    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  // Scrolled state + progress bar
  useEffect(() => {
    const el = document.querySelector("main");
    const onScroll = () => {
      const top = el?.scrollTop ?? window.scrollY;
      const height = (el?.scrollHeight ?? document.body.scrollHeight) - (el?.clientHeight ?? window.innerHeight);
      setScrolled(top > 4);
      setProgress(height > 0 ? Math.min(100, (top / height) * 100) : 0);
    };
    (el || window).addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => (el || window).removeEventListener("scroll", onScroll);
  }, []);

  const navItemClass = useMemo(
    () =>
      (id) =>
        [
          "relative px-3 py-2 rounded-md text-sm font-medium transition-colors",
          "after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-[2px] after:rounded-full after:transition-all",
          active === id
            ? "text-accent after:bg-accent after:opacity-100"
            : "text-secondary hover:text-heading after:bg-accent/60 after:opacity-0 hover:after:opacity-100",
        ].join(" "),
    [active]
  );

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const prefersReduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: prefersReduce ? "auto" : "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50">
      {/* Progress bar */}
      <div
        className="absolute left-0 right-0 top-0 h-[2px] bg-accent/20"
        aria-hidden="true"
      >
        <div
          className="h-full bg-accent transition-[width]"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Glassy container */}
      <div
        className={[
          "mx-auto max-w-6xl px-4",
          "pt-2", // small breathing space
        ].join(" ")}
      >
        <nav
          className={[
            "flex items-center justify-between h-12",
            "rounded-full px-3 md:px-4",
            "backdrop-blur-xl",
            scrolled ? "bg-background/70 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.35)] border border-border/60" : "bg-background/40 border border-transparent",
            "transition-all",
          ].join(" ")}
        >
          {/* Brand */}
          <button
            type="button"
            onClick={() => scrollTo("hero")}
            className="text-heading font-semibold text-base md:text-lg"
            aria-label="Go to home"
          >
            PT
          </button>

          {/* Center links (desktop) */}
          <ul className="hidden md:flex items-center gap-1">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <button
                  type="button"
                  onClick={() => scrollTo(s.id)}
                  className={navItemClass(s.id)}
                  aria-current={active === s.id ? "page" : undefined}
                >
                  {s.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="mailto:parth.tawde.dev@gmail.com"
              className="icon-btn"
              aria-label="Email"
              title="Email"
            >
              <FiMail />
            </a>
            <a
              href="https://github.com/Parth-09"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
              aria-label="GitHub"
              title="GitHub"
            >
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/parth-tawde/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <FiLinkedin />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="md:hidden p-3 rounded-full hover:bg-border/40"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </nav>

        {/* Mobile sheet */}
        {open && (
          <div className="md:hidden mt-2 rounded-2xl border border-border/60 bg-background/90 backdrop-blur-xl shadow-[0_10px_30px_-12px_rgba(0,0,0,0.4)]">
            <ul className="py-2">
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <button
                    type="button"
                    onClick={() => scrollTo(s.id)}
                    className={[
                      "w-full text-left px-4 py-3 text-base",
                      active === s.id ? "text-accent" : "text-secondary hover:text-heading",
                    ].join(" ")}
                  >
                    {s.label}
                  </button>
                </li>
              ))}
              <li className="flex items-center gap-3 px-4 py-3 border-t border-border/60">
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
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
