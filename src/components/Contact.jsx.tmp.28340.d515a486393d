function ContactLink({ label, value, href }) {
  if (!value) return null
  const external = href?.startsWith('http')
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-widest text-accent">{label}</p>
      {href ? (
        <a
          href={href}
          {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
          className="mt-1 block text-steel-100 transition hover:text-accent"
        >
          {value}
        </a>
      ) : (
        <p className="mt-1 text-steel-100">{value}</p>
      )}
    </div>
  )
}

export default function Contact({ profile }) {
  return (
    <section id="contact">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Get in Touch</h2>
        <p className="mt-2 max-w-xl text-steel-400">
          Interested in working together or want to see more? Reach out.
        </p>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <ContactLink label="Email" value={profile.email} href={`mailto:${profile.email}`} />
          <ContactLink label="Phone" value={profile.phone} href={`tel:${profile.phone}`} />
          <ContactLink label="Location" value={profile.location} />
          <ContactLink
            label="Freelancer"
            value={profile.freelancer ? 'View Profile' : ''}
            href={profile.freelancer}
          />
        </div>

        {profile.resumeUrl && (
          <a
            href={profile.resumeUrl}
            className="mt-10 inline-block rounded-md border border-steel-600 px-6 py-3 font-medium transition hover:border-steel-400 hover:bg-steel-800/40"
          >
            Download Résumé
          </a>
        )}
      </div>
    </section>
  )
}
