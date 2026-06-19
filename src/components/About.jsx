export default function About({ profile, skills }) {
  return (
    <section id="about" className="border-b border-steel-800/60">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">About</h2>
        <div className="mt-8 grid gap-12 md:grid-cols-3">
          <p className="text-steel-400 md:col-span-2 md:text-lg">{profile.bio}</p>

          <div>
            <h3 className="mb-4 font-mono text-sm uppercase tracking-widest text-accent">
              Skills & Tools
            </h3>
            <ul className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <li
                  key={s}
                  className="rounded border border-steel-800 bg-steel-900 px-3 py-1 text-sm text-steel-100"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
