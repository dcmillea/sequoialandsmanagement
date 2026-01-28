import Image from "next/image";

export default function OwnerSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* LEFT — Text */}
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Stewardship Rooted in Experience
            </h2>

            <p className="mt-5 text-base leading-relaxed text-foreground sm:text-lg">
              Sequoia Lands Management is led by a lifelong steward of land with
              a deep respect for nature and responsible care of natural spaces.
              With decades of hands-on experience, our approach is grounded in
              understanding the land, restoring its health, and protecting its
              long-term integrity.
            </p>

            <p className="mt-4 text-base leading-relaxed text-foreground sm:text-lg">
              Every property is treated with care and attention, guided by the
              belief that thoughtful stewardship today ensures resilient and
              thriving landscapes for generations to come.
            </p>

            <p className="mt-6 text-sm font-medium text-evergreen">
              — Founder & Land Steward
            </p>
          </div>

          {/* RIGHT — Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-border shadow-sm">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/owner.jpg"
                  alt="Founder of Sequoia Lands Management"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 480px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
