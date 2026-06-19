import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Reviews from './components/Reviews.jsx'
import Contact from './components/Contact.jsx'
import { profile, skills, projects } from './data/profile.js'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar name={profile.name} />
      <main>
        <Hero profile={profile} />
        <About profile={profile} skills={skills} />
        <Projects projects={projects} />
        <Reviews profile={profile} />
        <Contact profile={profile} />
      </main>
      <footer className="border-t border-steel-800/60">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-steel-400">
          © {new Date().getFullYear()} {profile.name}. Built with React + Tailwind.
        </div>
      </footer>
    </div>
  )
}
