// src/sections/Contact.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiCopy, FiSend, FiCheck } from "react-icons/fi";

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.5, delay: d },
});

export default function Contact() {
  const email = "parth.tawde.dev@gmail.com"; // <- update if needed
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState({ sent: false, error: "" });

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* noop */
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // Minimal demo handler: show success UI.
    // (Optional: wire to Formspree/EmailJS here.)
    setStatus({ sent: true, error: "" });
    e.currentTarget.reset();
  };

  return (
    <section className="py-12 md:py-20">
      <motion.h2
        {...fade(0)}
        className="text-5xl md:text-6xl font-bold text-heading mb-6 text-center"
      >
        Let’s Connect
      </motion.h2>
      <motion.p
        {...fade(0.05)}
        className="text-lg text-secondary max-w-2xl mx-auto text-center mb-10"
      >
        Have a role, project, or idea? I’d love to hear about it.
      </motion.p>

      {/* Contact card */}
      <motion.div
        {...fade(0.1)}
        className="card max-w-4xl mx-auto p-6 md:p-8"
      >
        {/* Quick actions */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div className="inline-flex items-center gap-3">
            <FiMail className="text-accent" />
            <a
              href={`mailto:${email}`}
              className="text-heading underline-offset-4 hover:underline"
            >
              {email}
            </a>
          </div>
          <div className="inline-flex items-center gap-3">
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-border/60 hover:text-heading"
              aria-label="Copy email to clipboard"
            >
              {copied ? <FiCheck /> : <FiCopy />} {copied ? "Copied" : "Copy"}
            </button>
            <a
              href="https://github.com/Parth-09"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-border/60 hover:text-heading"
              aria-label="Open GitHub"
            >
              <FiGithub /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/parthtawde/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-border/60 hover:text-heading"
              aria-label="Open LinkedIn"
            >
              <FiLinkedin /> LinkedIn
            </a>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm text-secondary mb-1">Name</label>
            <input
              id="name"
              name="name"
              required
              className="input"
              placeholder="Your name"
              autoComplete="name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm text-secondary mb-1">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="input"
              placeholder="you@example.com"
              autoComplete="email"
            />
          </div>
          <div className="md:col-span-2 flex flex-col">
            <label htmlFor="message" className="text-sm text-secondary mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="input min-h-[140px]"
              placeholder="Tell me a bit about what you’re looking for…"
            />
          </div>

          <div className="md:col-span-2 flex items-center justify-between pt-2">
            <p className="text-sm text-secondary">
              Prefer email? Use the address above or the button.
            </p>
            <button
              type="submit"
              className="btn btn-primary inline-flex items-center gap-2"
              aria-label="Send message"
            >
              <FiSend /> Send
            </button>
          </div>

          {/* Simple status message */}
          {status.sent && (
            <div className="md:col-span-2 text-sm text-green-600 mt-2">
              Thanks! Your message was sent (demo). I’ll get back to you soon.
            </div>
          )}
          {status.error && (
            <div className="md:col-span-2 text-sm text-red-500 mt-2">
              Something went wrong. Please email me directly.
            </div>
          )}
        </form>
      </motion.div>

      {/* Footer / sign-off */}
      <motion.div
        {...fade(0.15)}
        className="mt-8 text-center text-sm text-secondary"
      >
        © {new Date().getFullYear()} Parth Tawde · Built with React, Tailwind, and ❤️
      </motion.div>
    </section>
  );
}
