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

      <main className="snap-y snap-mandatory">
        <section id="hero" className="min-h-screen snap-start flex items-center">
          <div className="container"><Hero /></div>
        </section>

        <section id="about" className="min-h-screen snap-start flex items-center">
          <div className="container"><About /></div>
        </section>

        <section id="experience" className="min-h-screen snap-start flex items-center">
          <div className="container"><Experience /></div>
        </section>

        <section id="projects" className="min-h-screen snap-start flex items-center">
          <div className="container"><Projects /></div>
        </section>

        <section id="contact" className="min-h-screen snap-start flex items-center">
          <div className="container"><Contact /></div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
