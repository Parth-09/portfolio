import Navbar from './components/NavBar'
import Hero from './sections/Hero'
import About from './sections/About'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
      </main>
    </>
  )
}