export default function ProjectCard({ project, onOpen }) {
  const cover = project.images?.[0]

  return (
    <article className="group overflow-hidden rounded-lg border border-steel-800 bg-steel-900 transition hover:border-steel-600">
      <button
        type="button"
        onClick={() => onOpen(project, 0)}
        className="block w-full overflow-hidden"
      >
        <img
          src={cover}
          alt={project.title}
          loading="lazy"
          className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </button>

      <div className="p-5">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="mt-2 text-sm text-steel-400">{project.description}</p>

        {project.tools?.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tools.map((t) => (
              <li
                key={t}
                className="rounded bg-steel-800 px-2 py-0.5 font-mono text-xs text-steel-400"
              >
                {t}
              </li>
            ))}
          </ul>
        )}

        {project.images?.length > 1 && (
          <button
            type="button"
            onClick={() => onOpen(project, 0)}
            className="mt-4 text-sm font-medium text-accent hover:underline"
          >
            View {project.images.length} images →
          </button>
        )}
      </div>
    </article>
  )
}
