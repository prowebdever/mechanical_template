import { useState } from 'react'
import ProjectCard from './ProjectCard.jsx'
import Lightbox from './Lightbox.jsx'

export default function Projects({ projects }) {
  const [active, setActive] = useState(null)
  const [startIndex, setStartIndex] = useState(0)

  function open(project, idx) {
    setActive(project)
    setStartIndex(idx)
  }

  return (
    <section id="projects" className="border-b border-steel-800/60">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Projects</h2>
        <p className="mt-2 text-steel-400">Selected mechanical design and engineering work.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} onOpen={open} />
          ))}
        </div>
      </div>

      {active && (
        <Lightbox project={active} startIndex={startIndex} onClose={() => setActive(null)} />
      )}
    </section>
  )
}
