export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-navy/90 backdrop-blur z-50 py-4 px-8">
      <div className="max-w-6xl mx-auto flex justify-between">
        <a href="#" className="text-accent text-2xl font-bold">PT</a>
        <div className="flex gap-6">
          <a href="#about" className="text-lightest hover:text-accent transition">About</a>
          <a href="#projects" className="text-lightest hover:text-accent transition">Projects</a>
          <a 
            href="/assets/ParthTawde-Resume.pdf" 
            download 
            className="border border-accent text-accent px-4 py-2 rounded hover:bg-accent/10 transition"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  )
}