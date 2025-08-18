// src/App.jsx
import Section from "./components/Section";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-background text-text">
      <NavBar />

      {/* If you want scroll-snapping across full-height sections, keep these classes */}
      <main className="snap-y snap-mandatory">
        <Section id="hero" className="min-h-screen snap-start flex items-center">
          <Hero />
        </Section>

        <Section id="about" className="min-h-screen snap-start flex items-center">
          <About />
        </Section>

        <Section id="experience" className="min-h-screen snap-start flex items-center">
          <Experience />
        </Section>

        <Section id="projects" className="min-h-screen snap-start flex items-center">
          <Projects />
        </Section>

        <Section id="contact" className="min-h-screen snap-start flex items-center">
          <Contact />
        </Section>
      </main>

      <Footer />
    </div>
  );
}
