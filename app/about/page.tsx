import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-background">
      {/* Page Intro */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              About Sequoia Lands Management
            </h1>
            <p className="mt-5 text-base text-muted-foreground sm:text-lg">
              Sequoia Lands Management was founded on a simple belief: land
              should be cared for thoughtfully, patiently, and with respect for
              what makes it unique.
            </p>
          </div>
        </div>
      </section>

      {/* Personal Story */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            {/* Text */}
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                A personal connection to the land
              </h2>

              <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                <p>
                  Sequoia Lands Management grew from a lifelong relationship
                  with land — walking properties, observing how landscapes
                  change over time, and learning firsthand how thoughtful care
                  can make a lasting difference.
                </p>
                <p>
                  This work is not about quick outcomes or short-term fixes. It
                  is about understanding the land as it is today, honoring its
                  natural systems, and guiding it toward long-term health and
                  resilience.
                </p>
                <p>
                  Every project is approached with patience, humility, and the
                  belief that land deserves careful attention — not pressure or
                  haste.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative overflow-hidden rounded-2xl border border-border shadow-sm">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/about/1.jpg"
                  alt="Walking land and observing natural systems"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 520px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Block */}
      <section className="bg-muted">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <blockquote className="text-2xl font-medium leading-relaxed text-foreground sm:text-3xl">
            “The land will tell you what it needs, if you’re willing to slow
            down and listen.”
          </blockquote>
          <p className="mt-5 text-sm font-medium text-evergreen">
            — Founder, Sequoia Lands Management
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            {/* Image */}
            <div className="relative overflow-hidden rounded-2xl border border-border shadow-sm">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/about/2.jpg"
                  alt="Restored landscape and open space"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 520px"
                />
              </div>
            </div>

            {/* Text */}
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Our philosophy
              </h2>

              <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                <p>
                  We believe stewardship is a responsibility — not a
                  transaction. Caring for land means understanding its limits,
                  protecting its sensitive areas, and working with natural
                  processes rather than against them.
                </p>
                <p>
                  Whether preserving open space, restoring habitat, or planning
                  long-term care, our work is guided by restraint, respect, and
                  a deep appreciation for natural systems.
                </p>
              </div>

              <blockquote className="mt-8 border-l-4 border-evergreen pl-5 text-base italic text-foreground">
                “Good stewardship isn’t about doing more — it’s about doing
                what’s right.”
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="bg-muted">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold text-foreground">
              Looking ahead
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Sequoia Lands Management exists to care for land in a way that is
              calm, responsible, and enduring. Our goal is simple: to leave the
              land healthier, stronger, and better cared for than we found it.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
