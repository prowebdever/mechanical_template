export default function Reviews({ profile }) {
  if (!profile.freelancerReviews) return null

  return (
    <section id="reviews" className="border-b border-steel-800/60">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Verified Reviews</h2>
        <p className="mt-2 max-w-2xl text-steel-400">
          Rated{' '}
          <span className="font-semibold text-steel-100">
            {profile.freelancerRating} ★
          </span>{' '}
          from{' '}
          <span className="font-semibold text-steel-100">
            {profile.freelancerReviewCount} client reviews
          </span>{' '}
          on Freelancer. Real feedback from real projects — shown below so you can read it
          without leaving this page.
        </p>

        <a
          href={profile.freelancer}
          target="_blank"
          rel="noreferrer"
          className="group mt-10 block overflow-hidden rounded-xl border border-steel-700 bg-white p-5 shadow-2xl transition hover:border-accent sm:p-8"
        >
          {profile.freelancerHeader && (
            <img
              src={profile.freelancerHeader}
              alt="Luke Anthony — verified Freelancer profile, 5.0 rating"
              className="w-full max-w-xl"
            />
          )}

          <hr className="my-6 border-gray-200" />

          <img
            src={profile.freelancerReviews}
            alt="Client reviews and 5-star ratings from Freelancer"
            loading="lazy"
            className="w-full"
          />

          <span className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#29b2fe] px-4 py-2 text-sm font-semibold text-white transition group-hover:brightness-110">
            View full profile on Freelancer ↗
          </span>
        </a>

        <p className="mt-4 text-center text-sm text-steel-400">
          Screenshot of my{' '}
          <a
            href={profile.freelancer}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-accent hover:underline"
          >
            Freelancer profile
          </a>{' '}
          — click anywhere on the card to verify it live.
        </p>
      </div>
    </section>
  )
}
