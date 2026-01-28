import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const sections = [
  {
    title: "A personal approach to land stewardship",
    body: [
      "Every property has its own character — its trees, water, soil, wildlife, and history. We start by listening to your goals and understanding what makes your land special.",
      "Whether you’re looking to preserve open space, restore habitat, or create a long-term plan for responsible care, we approach every project with respect for the land and the people connected to it.",
    ],
    image: "/protect/1.jpg",
    alt: "Steward walking through a forested property",
    flip: false,
  },
  {
    title: "Preserve what matters most",
    body: [
      "Protecting land isn’t just about leaving it untouched — it’s about guiding it toward long-term health. We help identify sensitive areas, natural corridors, and the features that deserve special care.",
      "Together, we create a stewardship plan that keeps the land’s natural integrity at the center of every decision.",
    ],
    image: "/protect/2.jpg",
    alt: "Protected landscape with trees and open space",
    flip: true,
  },
  {
    title: "Restore and strengthen the ecosystem",
    body: [
      "When land has been impacted by erosion, invasive species, or neglect, the right restoration work can make a meaningful difference over time.",
      "We prioritize responsible, practical improvements — supporting native habitat, strengthening soil health, and improving long-term resilience.",
    ],
    image: "/protect/3.jpg",
    alt: "Creekside or habitat restoration work",
    flip: false,
  },
];

export default function ProtectYourLandPage() {
  return (
    <main className="bg-background">
      {/* Page Hero */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="max-w-xl">
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Protect Your Land
              </h1>
              <p className="mt-4 text-base text-muted-foreground sm:text-lg">
                We preserve and restore land through responsible stewardship —
                with a personal approach built on trust, care, and long-term
                integrity.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Link href="/contact">Start a conversation</Link>
                </Button>
                <Button asChild variant="outline" className="border-border">
                  <Link href="/projects">See our work</Link>
                </Button>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/protect/hero.jpg"
                  alt="Beautiful conserved landscape"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal story sections */}
      {sections.map((s) => (
        <section
          key={s.title}
          className={s.flip ? "bg-muted" : "bg-background"}
        >
          <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
            <div
              className={[
                "grid gap-12 lg:grid-cols-2 lg:items-center",
                s.flip ? "lg:[&>div:first-child]:order-2" : "",
              ].join(" ")}
            >
              {/* Text */}
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  {s.title}
                </h2>

                <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {s.body.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>

                <div className="mt-7">
                  <Button asChild variant="outline" className="border-border">
                    <Link href="/contact">Ask a question</Link>
                  </Button>
                </div>
              </div>

              {/* Image */}
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={s.image}
                    alt={s.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 560px"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-black/0 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* How it works (simple + reassuring) */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="rounded-2xl border border-border bg-card p-10 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">
              How it works
            </h2>
            <p className="mt-3 max-w-3xl text-sm text-muted-foreground">
              A calm, straightforward process — focused on understanding your
              land and caring for it responsibly.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-xl border border-border bg-background p-6">
                <p className="text-sm font-semibold text-evergreen">Step 1</p>
                <h3 className="mt-2 text-lg font-semibold text-foreground">
                  Learn your goals
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We start with a conversation to understand what you want for
                  your property.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-background p-6">
                <p className="text-sm font-semibold text-evergreen">Step 2</p>
                <h3 className="mt-2 text-lg font-semibold text-foreground">
                  Walk the land
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We assess the land’s condition and identify priorities for
                  preservation and restoration.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-background p-6">
                <p className="text-sm font-semibold text-evergreen">Step 3</p>
                <h3 className="mt-2 text-lg font-semibold text-foreground">
                  Create a stewardship plan
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We outline next steps and guide the work with long-term land
                  health in mind.
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link href="/contact">Request a consultation</Link>
              </Button>
              <Button asChild variant="outline" className="border-border">
                <Link href="/areas-we-serve">View areas we serve</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA band */}
      <section className="bg-muted">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="rounded-2xl border border-border bg-background p-10 text-center shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">
              Ready to protect your land?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">
              Tell us about your property and what you’re hoping to accomplish.
              We’ll recommend a thoughtful next step.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link href="/contact">Contact us</Link>
              </Button>
              <Button asChild variant="outline" className="border-border">
                <Link href="/projects">Explore projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
