export default function Hero({ profile }) {
  return (
    <section id="top" className="blueprint-grid border-b border-steel-800/60">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <p className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-accent">
          {profile.title}
        </p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-steel-400">
          {profile.tagline}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-md bg-accent px-6 py-3 font-medium text-steel-950 transition hover:brightness-110"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-md border border-steel-600 px-6 py-3 font-medium text-steel-100 transition hover:border-steel-400 hover:bg-steel-800/40"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}
