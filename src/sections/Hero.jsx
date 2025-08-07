export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center px-8 pt-20">
      <div className="max-w-6xl mx-auto">
        <p className="text-accent font-mono mb-4">Hi, my name is</p>
        <h1 className="text-5xl md:text-7xl font-bold text-lightest mb-4">Parth Tawde.</h1>
        <h2 className="text-3xl md:text-5xl text-slate mb-6">
          I build things for the web.
        </h2>
        <p className="text-slate max-w-lg mb-8">
          Software engineer specializing in React, Node.js, and cloud technologies.
        </p>
        <div className="flex gap-4">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn-outline">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}