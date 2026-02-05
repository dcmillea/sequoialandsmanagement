import Link from "next/link";

export default function HeroVideo() {
  return (
    <section className="relative h-[92vh] min-h-160 w-full overflow-hidden bg-background">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/hero/poster.jpg" // optional fallback image
      >
        <source src="/hero/hero.mp4" type="video/mp4" />
      </video>

      {/* Subtle dark overlay (helps text readability) */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Bottom fade to background (like your screenshot) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent to-white" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <p className="text-xs font-semibold tracking-[0.22em] text-evergreen/90 sm:text-sm">
          SEQUOIA LANDS MANAGEMENT
        </p>

        <h1 className="mt-5 text-5xl font-semibold leading-[0.95] tracking-tight text-evergreen sm:text-6xl md:text-7xl lg:text-8xl">
          Preserve Land,
          <br />
          Restore Nature.
        </h1>

        {/* Learn more */}
        <Link
          href="#what-we-do"
          className="mt-10 inline-flex flex-col items-center gap-2 text-xs font-semibold tracking-[0.2em] text-white/90 hover:text-white transition"
        >
          LEARN MORE
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/50 bg-white/10">
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>
          </span>
        </Link>
      </div>
    </section>
  );
}
